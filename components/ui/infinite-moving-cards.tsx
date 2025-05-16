"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion"

interface InfiniteMovingCardsProps {
  items: React.ReactNode[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duplicatedItems, setDuplicatedItems] = useState<React.ReactNode[]>([])

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    // Duplicate items to create the infinite effect
    setDuplicatedItems([...items, ...items])
  }, [items])

  const baseVelocity = useMotionValue(speed === "fast" ? 2 : speed === "normal" ? 1 : 0.5)
  const directionFactor = direction === "right" ? -1 : 1
  const x = useMotionValue(0)
  const smoothVelocity = useSpring(useVelocity(x), {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const [isPaused, setIsPaused] = useState(false)

  useAnimationFrame((t, delta) => {
    if (isPaused || !containerWidth) return

    let moveBy = directionFactor * baseVelocity.get() * (delta / 1000)
    moveBy += directionFactor * moveBy * velocityFactor.get()

    x.set(x.get() + moveBy)

    if (x.get() <= -containerWidth) {
      x.set(0)
    }
    if (x.get() > 0) {
      x.set(-containerWidth)
    }
  })

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div className="flex gap-4 whitespace-nowrap" style={{ x }}>
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 px-2">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
