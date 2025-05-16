"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  children: React.ReactNode
  className?: string
  size?: number
  color?: string
  strength?: number
}

export const Spotlight = ({
  children,
  className = "",
  size = 500,
  color = "rgba(124, 58, 237, 0.15)",
  strength = 0.3,
}: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    setOpacity(strength)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove as any)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as any)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}
