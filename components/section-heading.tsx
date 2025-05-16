"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { TextReveal } from "@/components/ui/text-reveal"

interface SectionHeadingProps {
  title: string
  description?: string
  center?: boolean
  className?: string
  subtitleClassName?: string
  animationDelay?: number
}

export default function SectionHeading({
  title,
  description,
  center = true,
  className,
  subtitleClassName,
  animationDelay = 0,
}: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={cn(
        "flex flex-col space-y-4",
        center && "items-center text-center",
        !center && "items-start text-left",
        className,
      )}
    >
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">{title}</div>
      {description && (
        <TextReveal
          text={description}
          className={cn("max-w-[85%] text-xl leading-normal text-muted-foreground", subtitleClassName)}
          animationType="fade"
          delay={0.3 + animationDelay}
        />
      )}
    </motion.div>
  )
}
