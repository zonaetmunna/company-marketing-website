"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextReveal } from "@/components/ui/text-reveal"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get Started Today</div>

          <AnimatedText
            text="Ready to Transform Your Business?"
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
            animation="typewriter"
          />

          <TextReveal
            text="Join thousands of satisfied customers who have taken their business to the next level."
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            animationType="wave"
            delay={0.5}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-full max-w-md flex-col gap-4 mt-6 sm:flex-row"
          >
            <Magnetic>
              <AnimatedButton variant="glow" size="lg">
                <Link href="/demo">Schedule a Demo</Link>
              </AnimatedButton>
            </Magnetic>
            <Magnetic>
              <AnimatedButton variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </AnimatedButton>
            </Magnetic>
          </motion.div>

          <motion.p
            className="text-xs text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            No credit card required. Start your free 14-day trial today.
          </motion.p>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
