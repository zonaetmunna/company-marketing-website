"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    id: "analytics",
    title: "Advanced Analytics",
    description: "Gain deep insights into your business with our powerful analytics capabilities.",
    content:
      "Our advanced analytics platform transforms raw data into actionable insights. With interactive dashboards, predictive modeling, and customizable reports, you can make data-driven decisions with confidence. The platform supports real-time data processing, allowing you to respond quickly to changing business conditions.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Protect your business with our comprehensive security solutions.",
    content:
      "Our enterprise security framework provides multi-layered protection for your digital assets. From advanced threat detection and prevention to compliance management and security awareness training, we offer a complete solution for modern security challenges. Our security operations center monitors your systems 24/7, ensuring rapid response to potential threats.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Streamline operations with intelligent workflow automation.",
    content:
      "Eliminate manual processes and increase efficiency with our workflow automation tools. Design custom workflows with our intuitive visual editor, integrate with your existing systems, and automate repetitive tasks. Our platform includes pre-built templates for common business processes, making it easy to get started with automation.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description: "Connect all your systems and data with our integration platform.",
    content:
      "Our integration platform connects your entire technology ecosystem, eliminating silos and enabling smooth data flow between applications. With hundreds of pre-built connectors, a powerful API framework, and support for custom integrations, you can create a unified technology landscape that supports your business objectives.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProductsFeatures() {
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Key Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore the powerful features that set our products apart from the competition.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id}>
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6 md:p-8">
                        <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
                        <p className="mb-4 text-muted-foreground">{feature.description}</p>
                        <p>{feature.content}</p>
                      </div>
                      <div>
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={800}
                          height={600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
