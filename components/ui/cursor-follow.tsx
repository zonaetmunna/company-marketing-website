"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorFollowProps {
  children?: React.ReactNode
  size?: number
  color?: string
  showRing?: boolean
  ringSize?: number
  ringColor?: string
  ringWidth?: number
  delay?: number
  showOnlyOnDesktop?: boolean
}

export const CursorFollow = ({
  children,
  size = 40,
  color = "rgba(124, 58, 237, 0.5)",
  showRing = true,
  ringSize = 80,
  ringColor = "rgba(124, 58, 237, 0.15)",
  ringWidth = 1,
  delay = 0.08,
  showOnlyOnDesktop = true,
}: CursorFollowProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseEnter = () => setHidden(false)
    const handleMouseLeave = () => setHidden(true)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart)
      link.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  // Don't show on mobile/touch devices
  if (showOnlyOnDesktop && typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <AnimatePresence>
      {!hidden && (
        <>
          {/* Main cursor */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full mix-blend-difference"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
            animate={{
              x: position.x - size / 2,
              y: position.y - size / 2,
              scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
              duration: delay,
            }}
          >
            {children}
          </motion.div>

          {/* Ring around cursor */}
          {showRing && (
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-[998] rounded-full border"
              style={{
                width: ringSize,
                height: ringSize,
                borderColor: ringColor,
                borderWidth: ringWidth,
              }}
              animate={{
                x: position.x - ringSize / 2,
                y: position.y - ringSize / 2,
                scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
                duration: delay * 1.5,
              }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}
