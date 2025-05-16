"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedImage } from "@/components/ui/animated-image"
import { TextReveal } from "@/components/ui/text-reveal"
import { ThreeDCard } from "@/components/ui/3d-card"

export default function AboutMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <TextReveal
                text="Our Mission"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                animationType="slide"
              />
              <TextReveal
                text="We're on a mission to empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage."
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                animationType="fade"
                delay={0.3}
              />
            </div>
            <div className="space-y-2">
              <TextReveal text="What Sets Us Apart" className="text-xl font-bold" animationType="slide" delay={0.4} />
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Client-centric approach with tailored solutions",
                  "Cutting-edge technology and methodologies",
                  "Experienced team of industry experts",
                  "Proven track record of successful implementations",
                  "Commitment to long-term partnerships",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="mr-2 h-1 w-1 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <ThreeDCard>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <AnimatedImage
                    src="/placeholder.svg?height=600&width=800"
                    alt="Team collaboration"
                    width={800}
                    height={600}
                    className="aspect-video object-cover"
                    animation="zoom-in"
                  />
                </CardContent>
              </Card>
            </ThreeDCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
