"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export const Magnetic = ({ children, className, strength = 20 }: MagneticProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHovered) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    setPosition({ x: x / strength, y: y / strength })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!isHovered) return

      const { clientX, clientY } = e
      const { left, top, width, height } = element.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)

      setPosition({ x: x / strength, y: y / strength })
    }

    window.addEventListener("mousemove", handleMouseMoveGlobal)
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlobal)
    }
  }, [isHovered, strength])

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}
