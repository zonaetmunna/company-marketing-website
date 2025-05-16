"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  formatFn?: (value: number) => string
  delay?: number
}

export const AnimatedCounter = ({
  value,
  duration = 1,
  className,
  formatFn = (value) => value.toString(),
  delay = 0,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp + delay * 1000
      }

      const elapsed = Math.max(0, timestamp - startTimestamp)
      const progress = Math.min(elapsed / (duration * 1000), 1)

      setDisplayValue(Math.floor(progress * value))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }

    const animationId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationId)
  }, [isInView, value, duration, delay, hasAnimated])

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {formatFn(displayValue)}
    </motion.span>
  )
}
