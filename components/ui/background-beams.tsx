"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setCursorPosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    controls.start({
      background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
    })
  }, [cursorPosition, controls])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 z-[-1]"
        animate={controls}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      />
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="beams-pattern"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
            patternTransform="translate(0 0) scale(1) rotate(0)"
          >
            <path d="M100 0 L0 100" stroke="rgba(124, 58, 237, 0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#beams-pattern)" />
      </svg>
    </div>
  )
}
