"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  containerClassName?: string
  animation?: "fade-in" | "slide-up" | "zoom-in" | "reveal" | "float"
  priority?: boolean
  once?: boolean
  delay?: number
}

export const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  animation = "fade-in",
  priority = false,
  once = true,
  delay = 0,
}: AnimatedImageProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })
  const [isLoaded, setIsLoaded] = useState(false)

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay } },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
        }
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } },
        }
      case "reveal":
        return {
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 0.8, delay, ease: "easeInOut" },
          },
        }
      case "float":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse" as const,
              repeatDelay: 2,
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay } },
        }
    }
  }

  const variants = getAnimationVariants()

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", containerClassName)}
      initial="hidden"
      animate={isInView && isLoaded ? "visible" : "hidden"}
      variants={variants}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  )
}
