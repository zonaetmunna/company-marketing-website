"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a small team of 5 passionate technologists with a vision to transform businesses.",
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a transformative digital solution.",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25 employees and moved to a larger office to accommodate our growing team.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened our first international office and began serving clients globally.",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Received multiple industry awards for innovation and client satisfaction.",
  },
  {
    year: "2023",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading technology providers to enhance our service offerings.",
  },
  {
    year: "2025",
    title: "Today",
    description: "Now a team of 100+ experts serving clients across 15 countries with industry-leading solutions.",
  },
]

export default function AboutTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Journey</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            From humble beginnings to industry leadership, here's how we've grown over the years.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border-l border-primary/30 pl-8 md:pl-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 last:mb-0"
              >
                <div className="absolute -left-3 h-6 w-6 rounded-full bg-primary/20 ring-4 ring-background">
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
                <div className="mb-1 text-sm font-semibold text-primary">{milestone.year}</div>
                <h3 className="text-xl font-bold">{milestone.title}</h3>
                <p className="mt-2 text-muted-foreground">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
