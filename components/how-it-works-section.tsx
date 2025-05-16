"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { CustomShapeDivider } from "@/components/ui/custom-shape-divider"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  // @ts-ignore - DrawSVGPlugin is a premium plugin
  gsap.registerPlugin(DrawSVGPlugin)
}

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a comprehensive consultation to understand your business goals, challenges, and current systems.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Our experts develop a tailored implementation strategy designed to maximize ROI and minimize disruption.",
    icon: "📝",
  },
  {
    number: "03",
    title: "Seamless Onboarding",
    description:
      "Our dedicated team handles the setup, data migration, and integration with your existing tools and workflows.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "Training & Support",
    description:
      "We provide comprehensive training for your team and ongoing support to ensure you get the most from our platform.",
    icon: "👨‍🏫",
  },
  {
    number: "05",
    title: "Continuous Optimization",
    description:
      "We regularly review your results and make data-driven recommendations to help you scale and improve outcomes.",
    icon: "📈",
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations
    if (sectionRef.current && timelineRef.current && stepsRef.current) {
      const stepCards = gsap.utils.toArray(".step-card")
      const stepIcons = gsap.utils.toArray(".step-icon")
      const stepNumbers = gsap.utils.toArray(".step-number")
      const stepConnectors = gsap.utils.toArray(".step-connector")

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate the timeline path
      if (stepConnectors.length) {
        tl.fromTo(
          stepConnectors,
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 1.5,
            stagger: 0.5,
            ease: "power2.inOut",
          },
          0,
        )
      }

      // Animate the step numbers
      tl.fromTo(
        stepNumbers,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.5,
          ease: "back.out(1.7)",
        },
        0.2,
      )

      // Animate the step icons
      tl.fromTo(
        stepIcons,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.5,
          ease: "power2.out",
        },
        0.3,
      )

      // Animate the step cards
      tl.fromTo(
        stepCards,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.5,
          ease: "power3.out",
        },
        0.4,
      )

      // Hover effects for cards
      stepCards.forEach((card: any) => {
        gsap.set(card, { transformOrigin: "center left" })

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
          })
        })
      })
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-1"
    >
      <CustomShapeDivider shape="curve" position="top" className="-translate-y-[1px]" flipX />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Our Process" description="A proven methodology to ensure your success" center />

          <div ref={timelineRef} className="mt-20 relative">
            {/* Timeline SVG path */}
            <svg
              className="absolute left-[30px] md:left-[60px] top-0 h-full w-[2px] md:w-[4px] hidden md:block"
              viewBox="0 0 4 100%"
              preserveAspectRatio="none"
            >
              {steps.map((_, index) => {
                const isLast = index === steps.length - 1
                if (isLast) return null

                return (
                  <line
                    key={`connector-${index}`}
                    className="step-connector"
                    x1="2"
                    y1={`${index * 20 + 2}%`}
                    x2="2"
                    y2={`${(index + 1) * 20}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                )
              })}
            </svg>

            <div ref={stepsRef} className="relative z-10 space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="step-number flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    {/* Mobile connector */}
                    {index < steps.length - 1 && <div className="h-16 w-0.5 bg-primary/20 my-2 md:hidden"></div>}
                  </div>

                  <Card className={cn("step-card w-full border border-primary/10 overflow-hidden")}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="step-icon hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>

                          {/* Decorative element */}
                          <div className="w-16 h-1 bg-primary/20 rounded-full mt-4"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="group flex items-center gap-2 text-primary hover:underline cursor-pointer">
              <span className="font-medium">See implementation timeline</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </div>
      </div>

      <CustomShapeDivider shape="wave" position="bottom" className="translate-y-[1px]" />
    </section>
  )
}
