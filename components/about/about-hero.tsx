"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { AnimatedText } from "@/components/ui/animated-text"
import { TextReveal } from "@/components/ui/text-reveal"

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <motion.div
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Story
          </motion.div>
          <AnimatedText
            text="About Your Company"
            className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
            animation="typewriter"
          />
          <TextReveal
            text="Founded in 2015, we've been on a mission to transform how businesses leverage technology to achieve their goals."
            className="max-w-[85%] text-xl leading-normal text-muted-foreground"
            animationType="wave"
            delay={0.5}
          />
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
