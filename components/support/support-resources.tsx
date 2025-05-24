"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { motion } from "framer-motion"
import {
    BookOpen,
    Download,
    ExternalLink,
    FileText,
    Headphones,
    Video
} from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "User Guide",
    description: "Comprehensive documentation to help you get the most out of our platform",
    icon: BookOpen,
    href: "/docs",
    type: "Documentation",
    color: "text-blue-500"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides covering all major features",
    icon: Video,
    href: "/tutorials",
    type: "Video",
    color: "text-red-500"
  },
  {
    title: "API Reference",
    description: "Complete API documentation for developers and integrations",
    icon: FileText,
    href: "/api-docs",
    type: "Technical",
    color: "text-green-500"
  },
  {
    title: "Webinars",
    description: "Join our live sessions and learn from experts",
    icon: Headphones,
    href: "/webinars",
    type: "Live",
    color: "text-purple-500"
  },
  {
    title: "Downloads",
    description: "Get our mobile apps, desktop tools, and resources",
    icon: Download,
    href: "/downloads",
    type: "Resources",
    color: "text-orange-500"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share best practices",
    icon: ExternalLink,
    href: "/community",
    type: "Community",
    color: "text-cyan-500"
  }
]

export default function SupportResources() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <TextGlowHover className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Helpful Resources
          </TextGlowHover>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to succeed with our platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={resource.href}>
                <HoverGlowCard className="h-full">
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg h-full flex flex-col group hover:bg-background/80 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-background/80 ${resource.color}`}>
                        <resource.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <AnimatedButton variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </div>
                  </div>
                </HoverGlowCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="glow">
                <Link href="/contact">Contact Support</Link>
              </AnimatedButton>
              <AnimatedButton variant="outline">
                <Link href="/feedback">Send Feedback</Link>
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 