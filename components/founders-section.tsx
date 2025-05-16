"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Linkedin, Twitter, Github, Globe, Mail } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"
import { TextReveal } from "@/components/ui/text-reveal"
import { HoverCardGlow } from "@/components/ui/hover-card-glow"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import SectionHeading from "@/components/section-heading"
import { CustomShapeDivider } from "@/components/ui/custom-shape-divider"

const founders = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah has 15+ years of experience in tech leadership. Prior to founding YourCompany, she was VP of Product at TechGiant where she led teams that developed award-winning products used by millions worldwide.",
    quote:
      "Our mission is to empower businesses with technology that doesn't just solve problems, but creates new possibilities.",
    socialLinks: [
      { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
      { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
      { icon: <Globe className="h-5 w-5" />, url: "#", label: "Website" },
    ],
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael is a visionary technologist with a background in AI and cloud architecture. He previously served as Lead Architect at CloudInnovate and holds multiple patents in distributed systems technology.",
    quote: "We're building technology that adapts to how people work, not the other way around.",
    socialLinks: [
      { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
      { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" },
      { icon: <Mail className="h-5 w-5" />, url: "#", label: "Email" },
    ],
  },
  {
    name: "David Rodriguez",
    role: "COO & Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David brings operational excellence with experience scaling startups from inception to acquisition. His background in finance and operations at GrowthVentures helps ensure YourCompany delivers exceptional value to customers.",
    quote:
      "Success isn't just about great technology, it's about creating an organization that can consistently deliver excellence.",
    socialLinks: [
      { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
      { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
      { icon: <Mail className="h-5 w-5" />, url: "#", label: "Email" },
    ],
  },
]

export default function FoundersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative w-full py-20 md:py-32 bg-gradient-2 overflow-hidden">
      <CustomShapeDivider shape="curve" position="top" className="-translate-y-[1px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Meet Our Founders"
          description="The visionary team behind our mission to transform businesses through technology"
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <HoverCardGlow>
                <BackgroundGradient className="rounded-[22px] p-0.5" containerClassName="rounded-[22px]">
                  <Card className="overflow-hidden rounded-[22px] border-0 h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <AnimatedImage
                          src={founder.image}
                          alt={founder.name}
                          width={400}
                          height={400}
                          className="aspect-square w-full object-cover"
                          animation="zoom-in"
                          delay={0.2 * index}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                          <p className="text-sm text-white/80">{founder.role}</p>
                        </div>
                      </div>

                      <div className="p-6">
                        <blockquote className="mb-4 italic text-muted-foreground">"{founder.quote}"</blockquote>
                        <TextReveal
                          text={founder.bio}
                          className="text-sm text-muted-foreground"
                          animationType="fade"
                          delay={0.3 + index * 0.2}
                        />

                        <div className="mt-6 flex gap-4">
                          {founder.socialLinks.map((link, i) => (
                            <Magnetic key={i}>
                              <AnimatedTooltip content={link.label}>
                                <a
                                  href={link.url}
                                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.icon}
                                  <span className="sr-only">{link.label}</span>
                                </a>
                              </AnimatedTooltip>
                            </Magnetic>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </HoverCardGlow>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="/about" className="text-primary hover:underline font-medium">
            Learn more about our team and company culture →
          </a>
        </motion.div>
      </div>

      <CustomShapeDivider shape="wave" position="bottom" className="translate-y-[1px]" />
    </section>
  )
}
