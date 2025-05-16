"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const HoveringCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(rotateX, springConfig)
  const springY = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const centerX = width / 2
      const centerY = height / 2
      const offsetX = (mouseX - centerX) / centerX
      const offsetY = (mouseY - centerY) / centerY

      rotateX.set(offsetY * 10) // Adjust the multiplier for more/less rotation
      rotateY.set(offsetX * -10) // Negative to make it follow the mouse
    }

    const handleMouseLeave = () => {
      rotateX.set(0)
      rotateY.set(0)
      setHovered(false)
    }

    const handleMouseEnter = () => {
      setHovered(true)
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
      element.addEventListener("mouseenter", handleMouseEnter)
      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
        element.removeEventListener("mouseenter", handleMouseEnter)
      }
    }
  }, [rotateX, rotateY])

  return (
    <div ref={ref} className={cn("relative group perspective-1000", containerClassName)}>
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "w-full h-full transition-all duration-200 ease-out",
          hovered ? "scale-[1.02]" : "scale-100",
          className,
        )}
      >
        {children}
      </motion.div>
    </div>
  )
}
