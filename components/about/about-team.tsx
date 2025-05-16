"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With 15+ years in tech leadership, Sarah founded the company with a vision to transform how businesses leverage technology.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael leads our technical strategy and ensures we're always at the cutting edge of technology innovation.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jessica Williams",
    role: "COO",
    bio: "Jessica oversees our day-to-day operations and ensures we deliver exceptional service to every client.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Rodriguez",
    role: "Head of Product",
    bio: "David leads our product development, focusing on creating solutions that solve real business problems.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Patel",
    role: "Head of Design",
    bio: "Emily ensures all our products and services deliver exceptional user experiences through thoughtful design.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Head of Sales",
    bio: "James leads our sales team, helping clients find the perfect solutions for their unique challenges.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function AboutTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Meet Our Team</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            The talented individuals who make our company exceptional.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="rounded-[22px] p-0.5" containerClassName="rounded-[22px]">
                <Card className="overflow-hidden rounded-[22px] border-0">
                  <CardContent className="p-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="aspect-square object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-4 p-6 pt-0">
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </CardFooter>
                </Card>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
