"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type ShapeType = "wave" | "curve" | "triangle" | "zigzag" | "layered" | "arrow"
type PositionType = "top" | "bottom"

interface CustomShapeDividerProps {
  shape?: ShapeType
  position?: PositionType
  className?: string
  height?: number
  color?: string
  animate?: boolean
  flipX?: boolean
}

export const CustomShapeDivider = ({
  shape = "wave",
  position = "bottom",
  className,
  height = 60,
  color = "fill-background",
  animate = true,
  flipX = false,
}: CustomShapeDividerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const renderShape = () => {
    switch (shape) {
      case "wave":
        return (
          <path
            d="M0,0 C173.07,0 220.41,39.54 411.68,41.03 C603.24,42.53 622.47,0 1000,0 L1000,60 L0,60 Z"
            className={color}
          />
        )
      case "curve":
        return <path d="M0,0 Q500,60 1000,0 L1000,60 L0,60 Z" className={color} />
      case "triangle":
        return <path d="M500,0 L1000,60 L0,60 Z" className={color} />
      case "zigzag":
        return <path d="M0,30 L200,0 L400,30 L600,0 L800,30 L1000,0 L1000,60 L0,60 Z" className={color} />
      case "layered":
        return (
          <>
            <path d="M0,0 Q250,60 500,0 T1000,0 L1000,60 L0,60 Z" className={cn(color, "opacity-30")} />
            <path d="M0,30 Q250,90 500,30 T1000,30 L1000,60 L0,60 Z" className={cn(color, "opacity-50")} />
            <path d="M0,40 Q250,100 500,40 T1000,40 L1000,60 L0,60 Z" className={color} />
          </>
        )
      case "arrow":
        return <path d="M500,0 L1000,40 L1000,60 L0,60 L0,40 Z" className={color} />
      default:
        return (
          <path
            d="M0,0 C173.07,0 220.41,39.54 411.68,41.03 C603.24,42.53 622.47,0 1000,0 L1000,60 L0,60 Z"
            className={color}
          />
        )
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
      style={{ height }}
    >
      <motion.svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 60"
        style={{
          transform: flipX ? "rotateY(180deg)" : undefined,
        }}
        initial={
          animate
            ? {
                opacity: 0,
                y: position === "top" ? -20 : 20,
              }
            : undefined
        }
        animate={
          animate && isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        transition={{
          duration: 0.7,
        }}
      >
        {renderShape()}
      </motion.svg>
    </div>
  )
}
