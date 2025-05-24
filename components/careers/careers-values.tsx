"use client"

import { Card } from "@/components/ui/card"
import { SparklesCore } from "@/components/ui/sparkles"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to solve complex problems in creative ways.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "We believe the best work happens when diverse minds come together with a shared purpose.",
  },
  {
    icon: "🌱",
    title: "Growth",
    description:
      "We foster continuous learning and personal development for all team members.",
  },
  {
    icon: "🌍",
    title: "Impact",
    description:
      "We measure success by the positive difference we make for our customers and communities.",
  },
  {
    icon: "🔍",
    title: "Excellence",
    description:
      "We strive for quality in everything we do, always raising the bar for ourselves.",
  },
  {
    icon: "❤️",
    title: "Inclusion",
    description:
      "We create an environment where everyone feels welcome, valued, and heard.",
  },
]

export default function CareersValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative h-12 w-12">
            <SparklesCore
              id="values-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="h-full w-full"
              particleColor="hsl(var(--primary))"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These core principles guide everything we do and shape our company culture.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("flex h-full flex-col p-6 shadow-lg transition-all duration-200 hover:shadow-xl")}>
                <div className="mb-4 text-3xl">{value.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 