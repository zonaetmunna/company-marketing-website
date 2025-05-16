"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string | string[]
  className?: string
  once?: boolean
  repeatDelay?: number
  animation?: "typewriter" | "bounce" | "fade-up" | "slide-up"
}

export const AnimatedText = ({
  text,
  className = "",
  once = true,
  repeatDelay = 0,
  animation = "fade-up",
}: AnimatedTextProps) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const currentText = textArray[currentTextIndex]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls, currentText])

  useEffect(() => {
    if (repeatDelay > 0 && textArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
        controls.start("hidden")
        setTimeout(() => {
          controls.start("visible")
        }, 100)
      }, repeatDelay)
      return () => clearInterval(interval)
    }
  }, [controls, repeatDelay, textArray.length])

  // Different animation variants
  const getVariants = (): Variants => {
    switch (animation) {
      case "typewriter":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.03,
            },
          },
        }
      case "bounce":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }
    }
  }

  const getChildVariants = (): Variants => {
    switch (animation) {
      case "typewriter":
      case "bounce":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: animation === "bounce" ? "spring" : "tween",
              damping: 12,
              stiffness: 100,
            },
          },
        }
      default:
        return {}
    }
  }

  const variants = getVariants()
  const childVariants = getChildVariants()

  if (animation === "typewriter" || animation === "bounce") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className={className}
        aria-label={currentText}
      >
        {currentText.split("").map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={childVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {currentText}
    </motion.div>
  )
}
