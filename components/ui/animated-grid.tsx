"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGridProps {
  children: React.ReactNode[]
  className?: string
  itemClassName?: string
  cols?: number
  gap?: number
  animationDuration?: number
  staggerDelay?: number
  hoverEffect?: boolean
}

export const AnimatedGrid = ({
  children,
  className,
  itemClassName,
  cols = 3,
  gap = 4,
  animationDuration = 0.5,
  staggerDelay = 0.1,
  hoverEffect = true,
}: AnimatedGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
      },
    },
  }

  return (
    <motion.div
      ref={gridRef}
      className={cn(`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-${gap}`, className)}
      variants={gridVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={cn("transition-transform duration-300", hoverEffect && "hover:scale-[1.02]", itemClassName)}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
