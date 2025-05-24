"use client"

import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CreditCard,
  Globe,
  Settings,
  Shield,
  Smartphone,
  Users
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    icon: Settings,
    articles: 12,
    href: "/support/getting-started",
    color: "text-blue-500"
  },
  {
    title: "Billing & Payments",
    description: "Manage your subscription and payment methods",
    icon: CreditCard,
    articles: 8,
    href: "/support/billing",
    color: "text-green-500"
  },
  {
    title: "Security & Privacy",
    description: "Keep your account and data secure",
    icon: Shield,
    articles: 15,
    href: "/support/security",
    color: "text-red-500"
  },
  {
    title: "Account Management",
    description: "Update your profile and account settings",
    icon: Users,
    articles: 10,
    href: "/support/account",
    color: "text-purple-500"
  },
  {
    title: "Mobile Apps",
    description: "Get help with our mobile applications",
    icon: Smartphone,
    articles: 6,
    href: "/support/mobile",
    color: "text-orange-500"
  },
  {
    title: "API & Integrations",
    description: "Connect with third-party services",
    icon: Globe,
    articles: 20,
    href: "/support/api",
    color: "text-cyan-500"
  }
]

export default function SupportCategories() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <TextGlowHover className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Browse by Category
          </TextGlowHover>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers organized by topic and feature
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <HoverGlowCard className="h-full">
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg h-full flex flex-col group hover:bg-background/80 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-background/80 ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.articles} articles
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </HoverGlowCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 