"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/ui/sparkles"

export default function ProductsCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 h-full w-full bg-background">
        <SparklesCore
          id="productsparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="h-full w-full"
          particleColor="#7c3aed"
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to Get Started?</h2>
          <p className="max-w-[85%] text-xl leading-normal text-muted-foreground">
            Contact our team for a personalized demo of our products.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
