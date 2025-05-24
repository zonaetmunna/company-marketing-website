"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/ui/glow-effect"
import { Input } from "@/components/ui/input"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { motion } from "framer-motion"
import { Book, MessageCircle, Phone, Search } from "lucide-react"

export default function SupportHero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TextGlowHover className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              How can we help you?
            </TextGlowHover>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Get instant answers to your questions, browse our knowledge base, or contact our support team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <GlowEffect className="mx-auto max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search for help..."
                    className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>
                <AnimatedButton variant="glow" size="lg">
                  Search
                </AnimatedButton>
              </div>
            </GlowEffect>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: MessageCircle, label: "Live Chat", description: "Chat with our team" },
              { icon: Book, label: "Knowledge Base", description: "Browse articles" },
              { icon: Phone, label: "Call Support", description: "Speak to an expert" },
              { icon: Search, label: "FAQ", description: "Common questions" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <GlowEffect className="h-full">
                  <Button
                    variant="ghost"
                    className="h-auto w-full flex-col gap-2 p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80"
                  >
                    <item.icon className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </Button>
                </GlowEffect>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 