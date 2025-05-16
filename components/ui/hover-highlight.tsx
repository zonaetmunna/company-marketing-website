"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverHighlightProps {
  children: React.ReactNode
  className?: string
  highlightClassName?: string
  highlightColor?: string
  highlightOpacity?: number
  highlightSize?: string
  highlightBlur?: string
  duration?: number
}

export const HoverHighlight = ({
  children,
  className,
  highlightClassName,
  highlightColor = "rgba(124, 58, 237, 0.2)",
  highlightOpacity = 1,
  highlightSize = "100% 40%",
  highlightBlur = "10px",
  duration = 0.2,
}: HoverHighlightProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("relative inline-block", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={cn("pointer-events-none absolute inset-0 z-0", highlightClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? highlightOpacity : 0 }}
        transition={{ duration }}
        style={{
          background: highlightColor,
          backgroundSize: highlightSize,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          filter: `blur(${highlightBlur})`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
