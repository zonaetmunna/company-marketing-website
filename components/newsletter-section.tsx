"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextReveal } from "@/components/ui/text-reveal"
import { GlowEffect } from "@/components/ui/glow-effect"

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <section ref={ref} className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-background">
        <SparklesCore
          id="newsletterSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={40}
          className="h-full w-full"
          particleColor="#7c3aed"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-xl overflow-hidden">
          <GlowEffect containerClassName="rounded-xl" glowOpacity={0.2}>
            <div className="border border-border/40 rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <div className="mb-4 rounded-full bg-green-100 p-3">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Thanks for subscribing!</h3>
                  <p className="mb-6 text-muted-foreground max-w-md">
                    We've sent a confirmation email to your inbox. Click the link to confirm your subscription and start
                    receiving our newsletter.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Subscribe another email
                  </Button>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <TextReveal
                    text="Stay ahead of the curve"
                    className="text-3xl md:text-4xl font-bold mb-4"
                    animationType="slide"
                  />
                  <TextReveal
                    text="Subscribe to our newsletter for exclusive insights, industry trends, and actionable tips delivered straight to your inbox."
                    className="text-muted-foreground max-w-xl mb-8"
                    animationType="fade"
                    delay={0.3}
                  />

                  <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Magnetic>
                        <AnimatedButton type="submit" variant="glow">
                          <span className="flex items-center gap-1">
                            Subscribe
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </AnimatedButton>
                      </Magnetic>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </GlowEffect>
        </div>
      </div>
    </section>
  )
}
