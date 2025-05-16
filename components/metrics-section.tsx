"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowUpRight, Globe, Shield } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { CustomShapeDivider } from "@/components/ui/custom-shape-divider"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const metrics = [
  {
    label: "Trusted Users",
    value: 125000,
    prefix: "",
    suffix: "+",
    description: "Professionals rely on our platform",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    label: "Countries",
    value: 52,
    prefix: "",
    suffix: "",
    description: "Serving clients worldwide",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    label: "Uptime SLA",
    value: 99.9,
    prefix: "",
    suffix: "%",
    description: "Reliable service you can count on",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    label: "Growth YoY",
    value: 127,
    prefix: "",
    suffix: "%",
    description: "Consistent business expansion",
    icon: <ArrowUpRight className="w-6 h-6 text-primary" />,
  },
]

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState<number[]>(metrics.map(() => 0))
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // GSAP animations
    if (sectionRef.current && cardsRef.current) {
      // Create a staggered entrance for the cards
      const cards = gsap.utils.toArray(".metric-card")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          onEnter: () => setInView(true),
          onLeaveBack: () => setInView(false),
        },
      })

      tl.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
      )

      // Floating animation for the cards
      cards.forEach((card: any) => {
        gsap.to(card, {
          y: "random(-10, 10)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })

      // Pulse animation for the icons
      const icons = gsap.utils.toArray(".metric-icon")
      icons.forEach((icon: any) => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Counter animation effect
  useEffect(() => {
    if (!inView) return

    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const countUpIntervals = metrics.map((metric, index) => {
      return setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const currentCount = Math.round(easingOutQuart(progress) * metric.value)

        if (frame === totalFrames) {
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = metric.value
            return newCounters
          })
          clearInterval(countUpIntervals[index])
        } else {
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = currentCount
            return newCounters
          })
        }
      }, frameDuration)
    })

    return () => {
      countUpIntervals.forEach((interval) => clearInterval(interval))
    }
  }, [inView])

  // Easing function for smoother counter animation
  const easingOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-2 overflow-hidden"
    >
      <CustomShapeDivider shape="curve" position="top" className="-translate-y-[1px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="By the Numbers"
          description="We're proud of what we've achieved together with our clients"
          center
        />

        <div ref={cardsRef} className="mx-auto mt-16 grid max-w-5xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={metric.label} className="metric-card border border-primary/10 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 metric-icon">{metric.icon}</div>
                <div className="flex items-center justify-center mb-1 text-3xl font-bold">
                  <span>{metric.prefix}</span>
                  <span className="tabular-nums">{counters[index].toLocaleString()}</span>
                  <span>{metric.suffix}</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>

                {/* Decorative element */}
                <div className="w-12 h-1 bg-primary/20 rounded-full mt-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <CustomShapeDivider shape="curve" position="bottom" className="translate-y-[1px]" />
    </section>
  )
}
