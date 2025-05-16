"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardGlowProps {
  children: React.ReactNode
  className?: string
  glowClassName?: string
  containerClassName?: string
  animateScale?: boolean
  scale?: number
  borderRadius?: string
  animateRotate?: boolean
  rotateAmount?: number
  glowColor?: string
  glowOpacity?: number
  glowSize?: number
}

export const HoverCardGlow = ({
  children,
  className,
  glowClassName,
  containerClassName,
  animateScale = true,
  scale = 1.02,
  borderRadius = "1rem",
  animateRotate = false,
  rotateAmount = 3,
  glowColor = "rgba(124, 58, 237, 1)",
  glowOpacity = 0.15,
  glowSize = 400,
}: HoverCardGlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovered) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setPosition({ x, y })

    if (animateRotate) {
      const rotateY = ((x - centerX) / centerX) * rotateAmount
      const rotateX = ((centerY - y) / centerY) * rotateAmount
      setRotation({ x: rotateX, y: rotateY })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (animateRotate) {
      setRotation({ x: 0, y: 0 })
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn("relative z-10 overflow-hidden", className)}
        style={{
          borderRadius,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered && animateScale ? scale : 1,
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
        <div
          className={cn("pointer-events-none absolute inset-0 z-20 transition-opacity duration-300", glowClassName)}
          style={{
            opacity: isHovered ? glowOpacity : 0,
            background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 50%)`,
          }}
        />
      </motion.div>
    </div>
  )
}
