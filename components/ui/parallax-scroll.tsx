"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
  direction?: "up" | "down" | "left" | "right"
}

export const ParallaxScroll = ({ children, className, baseVelocity = 1, direction = "up" }: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const isHorizontal = direction === "left" || direction === "right"
  const directionFactor = direction === "up" || direction === "left" ? -1 : 1

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current
        const content = container.firstElementChild as HTMLElement

        if (content) {
          setContainerWidth(container.offsetWidth)
          setContainerHeight(container.offsetHeight)
          setContentWidth(content.offsetWidth)
          setContentHeight(content.offsetHeight)
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    let animationId: number

    const animate = () => {
      if (isHorizontal) {
        const contentSize = contentWidth
        const containerSize = containerWidth
        const baseX = x.get()
        const targetX = baseX + directionFactor * baseVelocity * (1 + velocityFactor.get())

        if (targetX > 0 || targetX < -(contentSize - containerSize)) {
          x.set(0)
        } else {
          x.set(targetX)
        }
      } else {
        const contentSize = contentHeight
        const containerSize = containerHeight
        const baseY = y.get()
        const targetY = baseY + directionFactor * baseVelocity * (1 + velocityFactor.get())

        if (targetY > 0 || targetY < -(contentSize - containerSize)) {
          y.set(0)
        } else {
          y.set(targetY)
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [
    baseVelocity,
    directionFactor,
    isHorizontal,
    velocityFactor,
    x,
    y,
    contentWidth,
    contentHeight,
    containerWidth,
    containerHeight,
  ])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <motion.div
        style={{
          x: isHorizontal ? x : 0,
          y: isHorizontal ? 0 : y,
        }}
        className="flex flex-nowrap"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Helper function to calculate velocity
function useVelocity(value: MotionValue<number>) {
  const velocityRef = useRef(0)

  useEffect(() => {
    return value.onChange((current) => {
      const prevValue = value.getPrevious() || 0
      const delta = current - prevValue
      const timeDelta = 16 // Assuming 60fps
      velocityRef.current = delta / timeDelta
    })
  }, [value])

  return velocityRef.current
}
