"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  BarChart3,
  Code,
  Cog,
  Database,
  Globe,
  LineChart,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoveringCard } from "@/components/ui/hovering-card"

const services = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Digital Transformation",
    description: "Modernize your business with comprehensive digital transformation strategies and implementation.",
    link: "/services/digital-transformation",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your specific business needs and challenges.",
    link: "/services/software-development",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    link: "/services/mobile-development",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
    link: "/services/cloud-solutions",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Cybersecurity",
    description: "Comprehensive security assessments, implementation, and monitoring to protect your digital assets.",
    link: "/services/cybersecurity",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization.",
    link: "/services/data-analytics",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO & Digital Marketing",
    description: "Increase your online visibility and drive qualified traffic to your digital properties.",
    link: "/services/digital-marketing",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Business Intelligence",
    description: "Make data-driven decisions with our comprehensive business intelligence solutions.",
    link: "/services/business-intelligence",
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "IT Consulting",
    description: "Strategic technology consulting to align your IT investments with business objectives.",
    link: "/services/it-consulting",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all your technology needs.",
    link: "/services/support",
  },
]

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoveringCard>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <a
                      href={service.link}
                      className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Learn more →
                    </a>
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
