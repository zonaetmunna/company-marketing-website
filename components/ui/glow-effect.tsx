"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  glowClassName?: string
  glowSize?: number
  glowColor?: string
  glowOpacity?: number
  glowBlur?: number
  showOnlyOnHover?: boolean
}

export const GlowEffect = ({
  children,
  className,
  containerClassName,
  glowClassName,
  glowSize = 400,
  glowColor = "rgba(124, 58, 237, 1)",
  glowOpacity = 0.15,
  glowBlur = 40,
  showOnlyOnHover = false,
}: GlowEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(showOnlyOnHover ? 0 : glowOpacity)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    if (showOnlyOnHover) {
      setOpacity(isHovered ? glowOpacity : 0)
    } else {
      setOpacity(glowOpacity)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (showOnlyOnHover) {
      setOpacity(glowOpacity)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (showOnlyOnHover) {
      setOpacity(0)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove as any)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as any)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovered, showOnlyOnHover])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      style={{ isolation: "isolate" }}
    >
      <div
        className={cn("pointer-events-none absolute -inset-px z-0 transition-opacity duration-300", glowClassName)}
        style={{
          opacity,
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 50%)`,
          filter: `blur(${glowBlur}px)`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
