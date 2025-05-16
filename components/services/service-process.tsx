"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business, challenges, and goals through in-depth consultations and analysis.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our team creates a tailored strategy and roadmap aligned with your specific business objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, keeping you informed throughout the entire process.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures everything works flawlessly before deployment.",
  },
  {
    number: "05",
    title: "Deployment & Training",
    description:
      "We deploy the solution and provide comprehensive training to ensure your team can maximize its potential.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "Our relationship continues with dedicated support, maintenance, and continuous improvement.",
  },
]

export default function ServiceProcess() {
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Process</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We follow a proven methodology to ensure successful outcomes for every project.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-5 border-l border-primary/30 pl-6 md:border-l-0 md:pl-0"
              >
                <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full bg-primary md:static md:h-10 md:w-10 md:rounded-lg md:bg-primary/10 md:p-2">
                  {index < 3 ? (
                    <span className="hidden text-lg font-bold text-primary md:block">{step.number}</span>
                  ) : (
                    <CheckCircle2 className="hidden h-6 w-6 text-primary md:block" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
