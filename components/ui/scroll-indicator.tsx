"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  className?: string
  scrollToId?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  text?: string
}

export const ScrollIndicator = ({
  className,
  scrollToId,
  size = "md",
  showText = false,
  text = "Scroll to explore",
}: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator once the user has scrolled a bit
      if (window.scrollY > window.innerHeight / 3) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <motion.div
      className={cn("fixed bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      {showText && <span className="text-sm font-medium text-muted-foreground mb-2">{text}</span>}
      <motion.div
        className={cn(
          "cursor-pointer rounded-full border border-border/40 bg-background/80 backdrop-blur-md flex items-center justify-center",
          sizeClasses[size],
        )}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-4 w-4 text-primary" />
      </motion.div>
    </motion.div>
  )
}
