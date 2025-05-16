"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 0.9], [50, svgHeight - 50])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])

  const latestY = useRef(0)
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySmooth = useSpring(y1, springConfig)

  useEffect(() => {
    return y1.onChange((v) => {
      latestY.current = v
    })
  }, [y1])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "var(--primary)",
              borderColor: scrollYProgress.get() > 0 ? "white" : "var(--primary)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="#E5E7EB"
            strokeOpacity="0.2"
            className="stroke-muted-foreground"
          ></motion.path>
          <motion.path
            d={`M 1 ${y1} L 1 ${y2}`}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            className="stroke-primary"
          ></motion.path>
          <circle cx="1" cy={y2} r="4" fill="var(--primary)" className="fill-primary" />
        </svg>
      </div>
      <div ref={contentRef} className="ml-4 md:ml-8 pt-10">
        {children}
      </div>
    </motion.div>
  )
}
