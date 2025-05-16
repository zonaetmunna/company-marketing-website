"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextGlowHoverProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hoverColor?: string
  baseColor?: string
  duration?: number
  delay?: number
  staggerChildren?: boolean
  staggerDelay?: number
}

export const TextGlowHover = ({
  children,
  className,
  glowColor = "rgba(124, 58, 237, 0.7)",
  hoverColor = "rgba(124, 58, 237, 1)",
  baseColor = "currentColor",
  duration = 0.2,
  delay = 0,
  staggerChildren = false,
  staggerDelay = 0.03,
}: TextGlowHoverProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  if (staggerChildren && typeof children === "string") {
    const characters = children.split("")

    return (
      <motion.div
        ref={containerRef}
        className={cn("inline-flex", className)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ color: baseColor }}
        animate={{ color: isHovered ? hoverColor : baseColor }}
        transition={{ duration, delay }}
        style={{
          textShadow: isHovered ? `0 0 8px ${glowColor}` : "none",
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ color: baseColor }}
            animate={{ color: isHovered ? hoverColor : baseColor }}
            transition={{ duration, delay: delay + index * staggerDelay }}
            style={{
              textShadow: isHovered ? `0 0 8px ${glowColor}` : "none",
              display: char === " " ? "inline-block" : undefined,
              width: char === " " ? "0.25em" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ color: baseColor }}
      animate={{ color: isHovered ? hoverColor : baseColor }}
      transition={{ duration, delay }}
      style={{
        textShadow: isHovered ? `0 0 8px ${glowColor}` : "none",
      }}
    >
      {children}
    </motion.div>
  )
}
