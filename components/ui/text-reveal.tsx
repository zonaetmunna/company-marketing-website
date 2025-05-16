"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  once?: boolean
  repeatDelay?: number
  delay?: number
  duration?: number
  animationType?: "slide" | "fade" | "wave"
}

export const TextReveal = ({
  text,
  className,
  once = true,
  repeatDelay = 0,
  delay = 0,
  duration = 0.5,
  animationType = "slide",
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    } else if (!once && repeatDelay > 0) {
      const timeout = setTimeout(() => {
        setShouldAnimate(false)
        setTimeout(() => setShouldAnimate(true), 100)
      }, repeatDelay)
      return () => clearTimeout(timeout)
    }
  }, [isInView, once, repeatDelay])

  const getAnimationVariants = (): Variants => {
    switch (animationType) {
      case "slide":
        return {
          hidden: { y: "100%", opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * 0.05,
              duration,
            },
          }),
        }
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: delay + i * 0.05,
              duration,
            },
          }),
        }
      case "wave":
        return {
          hidden: { y: "100%", opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * 0.05,
              duration,
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
          }),
        }
      default:
        return {
          hidden: { y: "100%", opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { delay, duration } },
        }
    }
  }

  const words = text.split(" ")
  const variants = getAnimationVariants()

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => (
        <div key={`${word}-${i}`} className="mr-1.5 overflow-hidden">
          <motion.div custom={i} variants={variants} initial="hidden" animate={shouldAnimate ? "visible" : "hidden"}>
            {word}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
