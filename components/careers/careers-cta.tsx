"use client"

import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SendHorizontal } from "lucide-react"
import Link from "next/link"

export default function CareersCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <AnimatedGradientBorder className="p-8 md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join Our Team?
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
                We're always looking for talented individuals to help us build the future. Even if you don't see a position that matches your skills, we'd love to hear from you!
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button asChild size="lg">
                  <Link href="/careers#openings">
                    See Open Positions
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact Us
                    <SendHorizontal className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedGradientBorder>
        </motion.div>
      </div>
    </section>
  )
} 