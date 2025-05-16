"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverGlowCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  glowClassName?: string
  glowSize?: number
  glowColor?: string
  glowOpacity?: number
  hoverScale?: number
}

export const HoverGlowCard = ({
  children,
  className,
  containerClassName,
  glowClassName,
  glowSize = 400,
  glowColor = "rgba(124, 58, 237, 1)",
  glowOpacity = 0.15,
  hoverScale = 1.02,
}: HoverGlowCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovered) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn("pointer-events-none absolute -inset-px z-0 transition-opacity duration-300", glowClassName)}
        style={{
          opacity: isHovered ? glowOpacity : 0,
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 50%)`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </motion.div>
  )
}
