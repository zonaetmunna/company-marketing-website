"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface WavyBackgroundProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "medium" | "fast"
  waveOpacity?: number
  animated?: boolean
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#7c3aed", "#db2777"],
  waveWidth = 50,
  backgroundFill = "transparent",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.15,
  animated = true,
}: WavyBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setSvgWidth(width)
        setSvgHeight(height)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const speedMap = {
    slow: "30s",
    medium: "20s",
    fast: "10s",
  }

  const animationDuration = speedMap[speed]

  const waves = colors.map((color, i) => {
    const waveHeight = svgHeight / colors.length
    const points = generateWavePoints(svgWidth, waveHeight, waveWidth)
    const animationDelay = `-${i * 5}s`

    return (
      <path
        key={i}
        d={points}
        fill={color}
        opacity={waveOpacity}
        style={{
          animation: animated ? `wave ${animationDuration} linear infinite` : undefined,
          animationDelay,
        }}
      />
    )
  })

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="none"
      >
        <rect width={svgWidth} height={svgHeight} fill={backgroundFill} />
        {waves}
        <style>
          {`
            @keyframes wave {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

function generateWavePoints(width: number, height: number, waveWidth: number): string {
  const points = []
  const segments = Math.ceil(width / waveWidth) + 1
  const heightOffset = height / 2

  points.push(`M 0 ${height}`)
  points.push(`L 0 ${heightOffset}`)

  for (let i = 0; i < segments; i++) {
    const x1 = i * waveWidth
    const y1 = heightOffset + Math.sin(i * 0.5) * heightOffset * 0.5
    const x2 = (i + 0.5) * waveWidth
    const y2 = heightOffset - Math.sin((i + 0.5) * 0.5) * heightOffset * 0.5
    const x3 = (i + 1) * waveWidth
    const y3 = heightOffset + Math.sin((i + 1) * 0.5) * heightOffset * 0.5

    points.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3}`)
  }

  points.push(`L ${width} ${height}`)
  points.push("Z")

  return points.join(" ")
}
