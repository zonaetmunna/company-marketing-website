"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function BlogHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Blog</div>
          <h1 className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Insights & Resources
          </h1>
          <p className="max-w-[85%] text-xl leading-normal text-muted-foreground">
            Expert perspectives, industry trends, and practical advice from our team.
          </p>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
