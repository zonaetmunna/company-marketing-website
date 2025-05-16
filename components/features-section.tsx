"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, BarChart3, Layers, Lightbulb, Rocket, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedGrid } from "@/components/ui/animated-grid"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import SectionHeading from "@/components/section-heading"

const features = [
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Fast Implementation",
    description: "Get up and running quickly with our streamlined onboarding process.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your data is always protected.",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Advanced Analytics",
    description: "Gain insights with comprehensive reporting and analytics tools.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "High Performance",
    description: "Optimized for speed and reliability, even at enterprise scale.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Scalable Architecture",
    description: "Our platform grows with your business, from startup to enterprise.",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Innovative Solutions",
    description: "Stay ahead with cutting-edge features and continuous updates.",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Everything You Need"
          description="Our comprehensive platform provides all the tools you need to succeed in today's competitive market."
          center
        />

        <div className="mx-auto mt-16 md:max-w-[64rem]">
          <AnimatedGrid cols={3} gap={8} staggerDelay={0.1}>
            {features.map((feature, index) => (
              <HoverGlowCard key={index}>
                <Card className="h-full border border-border/50 overflow-hidden">
                  <CardHeader>
                    <div className="mb-2 rounded-lg bg-primary/10 p-2 w-fit">{feature.icon}</div>
                    <CardTitle>
                      <TextGlowHover>{feature.title}</TextGlowHover>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </HoverGlowCard>
            ))}
          </AnimatedGrid>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/features"
            className="group inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-primary"
          >
            <TextGlowHover>See All Features</TextGlowHover>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
