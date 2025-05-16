"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  glareOpacity?: number
  rotationIntensity?: number
  shadowIntensity?: number
  glareEnabled?: boolean
  shadowEnabled?: boolean
}

export const ThreeDCard = ({
  children,
  className = "",
  containerClassName = "",
  glareOpacity = 0.2,
  rotationIntensity = 10,
  shadowIntensity = 0.5,
  glareEnabled = true,
  shadowEnabled = true,
}: ThreeDCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = width / 2
    const centerY = height / 2
    const rotateY = ((mouseX - centerX) / centerX) * rotationIntensity
    const rotateX = ((centerY - mouseY) / centerY) * rotationIntensity

    setRotation({ x: rotateX, y: rotateY })
    setGlarePosition({ x: (mouseX / width) * 100, y: (mouseY / height) * 100 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative perspective-1000", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn("relative w-full h-full transition-transform duration-200", className)}
        style={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          transformStyle: "preserve-3d",
        }}
      >
        {children}

        {/* Glare effect */}
        {glareEnabled && isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareOpacity}) 0%, rgba(255, 255, 255, 0) 60%)`,
            }}
          />
        )}

        {/* Shadow effect */}
        {shadowEnabled && (
          <motion.div
            className="absolute -z-10 inset-0 rounded-lg bg-black/20 blur-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: isHovered ? shadowIntensity : 0,
              y: isHovered ? 16 : 8,
            }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </div>
  )
}
