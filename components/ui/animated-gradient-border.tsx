"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  animate?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  borderWidth = 1,
  animate = false,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-[23px]", className)}>
      <motion.div
        className="absolute inset-0 rounded-[23px]"
        style={{
          background:
            "linear-gradient(120deg, #84fab0 0%, #8fd3f4 50%, #84fab0 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={
          animate
            ? {
                backgroundPosition: ["0% 0%", "200% 200%"],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
      />
      <div
        className="absolute inset-[1px] rounded-[22px] bg-background"
        style={{ margin: borderWidth - 1 }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
