"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderWidth?: number
  duration?: number
  colors?: string[]
  animate?: boolean
}

export const AnimatedGradientBorder = ({
  children,
  className = "",
  containerClassName = "",
  borderWidth = 2,
  duration = 8,
  colors = ["rgba(124, 58, 237, 1)", "rgba(219, 39, 119, 1)", "rgba(124, 58, 237, 1)"],
  animate = true,
}: AnimatedGradientBorderProps) => {
  const [gradientColors, setGradientColors] = useState<string[]>(colors)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!animate) return

    const intervalId = setInterval(() => {
      setGradientColors((prevColors) => {
        const newColors = [...prevColors]
        const firstColor = newColors.shift()
        if (firstColor) newColors.push(firstColor)
        return newColors
      })
    }, duration * 1000)

    return () => clearInterval(intervalId)
  }, [animate, duration])

  const gradientSize = Math.max(dimensions.width, dimensions.height) * 2
  const gradientString = `conic-gradient(from 0deg, ${gradientColors.join(", ")})`

  return (
    <div
      ref={containerRef}
      className={cn("relative p-[2px] overflow-hidden rounded-lg", containerClassName)}
      style={{
        padding: borderWidth,
      }}
    >
      <div
        className="absolute inset-0 z-[-1] animate-spin-slow"
        style={{
          background: gradientString,
          width: `${gradientSize}px`,
          height: `${gradientSize}px`,
          top: `${-gradientSize / 2 + dimensions.height / 2}px`,
          left: `${-gradientSize / 2 + dimensions.width / 2}px`,
          animationDuration: `${duration}s`,
        }}
      />
      <div className={cn("h-full w-full bg-background rounded-[calc(0.5rem-2px)]", className)}>{children}</div>
    </div>
  )
}
