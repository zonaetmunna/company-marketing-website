"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
  glowColor?: string
  hoverScale?: number
  pressScale?: number
}

export const AnimatedButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  glowColor = "rgba(124, 58, 237, 0.5)",
  hoverScale = 1.05,
  pressScale = 0.95,
  ...props
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const getVariant = () => {
    switch (variant) {
      case "outline":
        return "border border-primary bg-transparent text-primary hover:bg-primary/10"
      case "ghost":
        return "bg-transparent text-foreground hover:bg-muted"
      case "glow":
        return "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(124,58,237,0.5)]"
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90"
    }
  }

  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8 rounded-md px-3 text-xs"
      case "lg":
        return "h-12 rounded-md px-8 text-base"
      case "icon":
        return "h-9 w-9 rounded-md"
      default:
        return "h-10 rounded-md px-4 py-2 text-sm"
    }
  }

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        getVariant(),
        getSize(),
        className,
      )}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: pressScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        boxShadow: variant === "glow" && isHovered ? `0 0 25px ${glowColor}` : undefined,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
