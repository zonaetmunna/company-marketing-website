"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"

export function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleDensity?: number
}) {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return

    const density = particleDensity || 50
    const newParticles = []
    const particleColors = particleColor ? [particleColor] : ["#FFC700", "#FF6B6B", "#4D63DD", "#7C3AED"]

    for (let i = 0; i < density; i++) {
      const x = Math.random() * windowSize.width
      const y = Math.random() * windowSize.height
      const size = Math.random() * (maxSize || 4) + (minSize || 1)
      const color = particleColors[Math.floor(Math.random() * particleColors.length)]
      newParticles.push({ x, y, size, color })
    }

    setParticles(newParticles)
  }, [windowSize, particleColor, minSize, maxSize, particleDensity])

  return (
    <div
      className={cn("h-full w-full", className)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        background: background || "",
      }}
    >
      <svg
        id={id}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {particles.map((particle, index) => (
          <SparkleInstance
            key={index}
            size={particle.size}
            color={particle.color}
            x={particle.x}
            y={particle.y}
            speed={speed}
          />
        ))}
      </svg>
    </div>
  )
}

const SparkleInstance = ({
  size,
  color,
  x,
  y,
  speed,
}: {
  size: number
  color: string
  x: number
  y: number
  speed?: number
}) => {
  const controls = useAnimation()
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const startAnimation = async () => {
      setRotate(Math.random() * 360)
      await controls.start({
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        transition: {
          duration: speed || Math.random() * 2 + 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    }
    startAnimation()
  }, [controls, speed])

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      style={{ transformOrigin: "center", rotate: `${rotate}deg` }}
      animate={controls}
    />
  )
}
