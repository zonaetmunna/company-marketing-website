"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Lightbulb, Shield, Star, Target, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoveringCard } from "@/components/ui/hovering-card"

const values = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Innovation",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, both internally and with our clients, to achieve exceptional results.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in all our business dealings.",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication.",
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Passion",
    description: "We're genuinely passionate about technology and the positive impact it can have on businesses.",
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Client Success",
    description: "Our ultimate measure of success is the success of our clients. Their goals are our goals.",
  },
]

export default function AboutValues() {
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Core Values</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            These principles guide everything we do and define who we are as a company.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoveringCard>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </HoveringCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
