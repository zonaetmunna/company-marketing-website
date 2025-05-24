"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  variant?: "grid" | "dots"
  intensity?: "light" | "medium" | "strong"
  className?: string
}

export function AnimatedBackground({
  children,
  variant = "grid",
  intensity = "medium",
  className,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      container.style.setProperty("--mouse-x", x.toString())
      container.style.setProperty("--mouse-y", y.toString())
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const intensityClasses = {
    light: "opacity-[0.03]",
    medium: "opacity-[0.07]",
    strong: "opacity-[0.12]",
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-background",
        className
      )}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          intensityClasses[intensity]
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {variant === "grid" && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              transform:
                "translate(calc(var(--mouse-x) * -10px), calc(var(--mouse-y) * -10px))",
            }}
          />
        )}
        {variant === "dots" && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              transform:
                "translate(calc(var(--mouse-x) * -10px), calc(var(--mouse-y) * -10px))",
            }}
          />
        )}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
