"use client"

import { GlowEffect } from "@/components/ui/glow-effect"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Competitive salary and equity options",
  "Flexible work arrangements, including remote options",
  "Comprehensive health, dental, and vision insurance",
  "Generous paid time off and parental leave",
  "Annual learning and development budget",
  "Wellness programs and gym membership subsidies",
  "Regular team events and retreats",
  "Modern office with complimentary snacks and beverages",
]

export default function CareersBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Benefits</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter md:text-4xl/tight">
                We Take Care of Our Team
              </h2>
              <TextReveal
                text="At Your Company, we believe that happy employees create exceptional products. That's why we offer a comprehensive benefits package designed to support your well-being and growth."
                className="mt-4 text-muted-foreground"
                animationType="fade"
                delay={0.3}
              />
            </motion.div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <GlowEffect>
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last">
              <Image
                src="/images/office-space.jpg"
                alt="Modern office space with team members collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
          </GlowEffect>
        </div>
      </div>
    </section>
  )
} 