"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: "gradient" | "dots" | "grid" | "waves" | "noise"
  intensity?: "light" | "medium" | "strong"
  interactive?: boolean
  speed?: "slow" | "medium" | "fast"
}

export const AnimatedBackground = ({
  children,
  className,
  variant = "gradient",
  intensity = "medium",
  interactive = true,
  speed = "medium",
}: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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
    if (!interactive) return

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [interactive])

  // Intensity values
  const intensityValues = {
    light: {
      opacity: 0.05,
      blur: "80px",
      scale: 0.8,
    },
    medium: {
      opacity: 0.1,
      blur: "60px",
      scale: 1,
    },
    strong: {
      opacity: 0.15,
      blur: "40px",
      scale: 1.2,
    },
  }

  // Speed values
  const speedValues = {
    slow: 20,
    medium: 10,
    fast: 5,
  }

  // Get the appropriate background based on variant
  const getBackground = () => {
    const { opacity, blur, scale } = intensityValues[intensity]
    const speedValue = speedValues[speed]

    switch (variant) {
      case "gradient":
        return (
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              background: interactive
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary), ${opacity}) 0%, transparent 70%)`
                : `radial-gradient(circle at 50% 50%, rgba(var(--primary), ${opacity}) 0%, transparent 70%)`,
            }}
            transition={{ duration: 0.8 }}
          />
        )
      case "dots":
        return <div className="absolute inset-0 z-0 bg-dot-pattern opacity-70" style={{ opacity }} />
      case "grid":
        return <div className="absolute inset-0 z-0 bg-grid-pattern" style={{ opacity }} />
      case "waves":
        return (
          <motion.div
            className="absolute inset-0 z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 1 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none">
              <motion.path
                d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,165.3C672,139,768,117,864,144C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill={`rgba(var(--primary), ${opacity / 2})`}
                animate={{
                  d: [
                    "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,165.3C672,139,768,117,864,144C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,165.3C672,128,768,96,864,106.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,165.3C672,139,768,117,864,144C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: speedValue,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill={`rgba(var(--primary), ${opacity / 3})`}
                animate={{
                  d: [
                    "M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,133.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: speedValue * 1.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        )
      case "noise":
        return (
          <div
            className="absolute inset-0 z-0"
            style={{
              opacity,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {getBackground()}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
