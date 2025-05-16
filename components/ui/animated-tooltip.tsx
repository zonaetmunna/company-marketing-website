"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  className?: string
  contentClassName?: string
  delayShow?: number
  delayHide?: number
}

export const AnimatedTooltip = ({
  children,
  content,
  side = "top",
  className = "",
  contentClassName = "",
  delayShow = 200,
  delayHide = 100,
}: AnimatedTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }

    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true)
      updatePosition()
    }, delayShow)
  }

  const handleMouseLeave = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, delayHide)
  }

  const updatePosition = () => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    setPosition({ x, y })
  }

  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  const getTooltipPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 }

    const rect = containerRef.current.getBoundingClientRect()
    const tooltipOffset = 10

    switch (side) {
      case "top":
        return { x: "-50%", y: `calc(-100% - ${tooltipOffset}px)` }
      case "bottom":
        return { x: "-50%", y: `${rect.height + tooltipOffset}px` }
      case "left":
        return { x: `calc(-100% - ${tooltipOffset}px)`, y: "-50%" }
      case "right":
        return { x: `${rect.width + tooltipOffset}px`, y: "-50%" }
      default:
        return { x: "-50%", y: `calc(-100% - ${tooltipOffset}px)` }
    }
  }

  const tooltipPosition = getTooltipPosition()

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(
              "absolute z-50 whitespace-nowrap rounded-md bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
              contentClassName,
            )}
            style={{
              left: side === "left" || side === "right" ? undefined : "50%",
              top: side === "top" || side === "bottom" ? undefined : "50%",
              transform: `translate(${tooltipPosition.x}, ${tooltipPosition.y})`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
