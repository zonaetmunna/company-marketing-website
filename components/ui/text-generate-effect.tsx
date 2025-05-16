"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)

  useEffect(() => {
    if (currentIndex < words.length && isGenerating) {
      const timeout = setTimeout(() => {
        setRenderedText(words.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 20) // Adjust speed as needed

      return () => clearTimeout(timeout)
    } else {
      setIsGenerating(false)
    }
  }, [currentIndex, words, isGenerating])

  return (
    <motion.div
      className={cn("font-normal", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {renderedText}
      {isGenerating && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="inline-block ml-1 h-4 w-0.5 bg-foreground"
        />
      )}
    </motion.div>
  )
}
