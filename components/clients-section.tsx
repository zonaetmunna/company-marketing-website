"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { HoverCardGlow } from "@/components/ui/hover-card-glow"
import SectionHeading from "@/components/section-heading"

const clients = [
  {
    name: "Acme Inc",
    logo: "/placeholder.svg?height=40&width=150&text=ACME",
    width: 150,
    height: 40,
  },
  {
    name: "GlobalTech",
    logo: "/placeholder.svg?height=40&width=150&text=GLOBALTECH",
    width: 150,
    height: 40,
  },
  {
    name: "Innovate Co",
    logo: "/placeholder.svg?height=40&width=140&text=INNOVATE",
    width: 140,
    height: 40,
  },
  {
    name: "FutureSoft",
    logo: "/placeholder.svg?height=40&width=160&text=FUTURESOFT",
    width: 160,
    height: 40,
  },
  {
    name: "TechCorp",
    logo: "/placeholder.svg?height=40&width=145&text=TECHCORP",
    width: 145,
    height: 40,
  },
  {
    name: "Visionary",
    logo: "/placeholder.svg?height=40&width=155&text=VISIONARY",
    width: 155,
    height: 40,
  },
  {
    name: "NextLevel",
    logo: "/placeholder.svg?height=40&width=150&text=NEXTLEVEL",
    width: 150,
    height: 40,
  },
  {
    name: "Elevate",
    logo: "/placeholder.svg?height=40&width=130&text=ELEVATE",
    width: 130,
    height: 40,
  },
]

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Trusted by Leading Companies"
          description="Join thousands of forward-thinking organizations that rely on our platform"
          center
        />

        <div className="mt-16 space-y-4">
          <InfiniteMovingCards
            items={clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center px-4 py-2">
                <HoverCardGlow glowOpacity={0.1}>
                  <div className="flex items-center justify-center h-16 px-8 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                </HoverCardGlow>
              </div>
            ))}
            direction="left"
            speed="slow"
            pauseOnHover
          />

          <InfiniteMovingCards
            items={[...clients].reverse().map((client) => (
              <div key={`${client.name}-reverse`} className="flex items-center justify-center px-4 py-2">
                <HoverCardGlow glowOpacity={0.1}>
                  <div className="flex items-center justify-center h-16 px-8 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                </HoverCardGlow>
              </div>
            ))}
            direction="right"
            speed="slow"
            pauseOnHover
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="/case-studies" className="text-primary hover:underline font-medium">
            See our case studies →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
