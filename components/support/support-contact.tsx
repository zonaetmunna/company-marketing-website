"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { GlowEffect } from "@/components/ui/glow-effect"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { motion } from "framer-motion"
import {
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send
} from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    action: "Start Chat",
    href: "/chat",
    availability: "24/7 Available",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    action: "Send Email",
    href: "mailto:support@yourcompany.com",
    availability: "Response within 2 hours",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    action: "Call Now",
    href: "tel:+1-800-123-4567",
    availability: "Mon-Fri, 9AM-6PM EST",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
]

export default function SupportContact() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <TextGlowHover className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </TextGlowHover>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <HoverGlowCard className="h-full">
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg h-full flex flex-col text-center group hover:bg-background/80 transition-all duration-300">
                    <div className={`mx-auto p-4 rounded-full ${method.bgColor} mb-4`}>
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {method.description}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3" />
                      {method.availability}
                    </div>
                    
                    <Link href={method.href}>
                      <AnimatedButton variant="outline" className="w-full">
                        {method.action}
                      </AnimatedButton>
                    </Link>
                  </div>
                </HoverGlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlowEffect>
              <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Enterprise Support
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Need dedicated support for your organization? Our enterprise team provides priority assistance, custom training, and dedicated account management.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">Dedicated phone line</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">Priority email support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Slack integration available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Office Locations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="font-medium">San Francisco, CA</div>
                          <div className="text-sm text-muted-foreground">
                            123 Tech Street, Suite 100<br />
                            San Francisco, CA 94105
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <div className="font-medium">New York, NY</div>
                          <div className="text-sm text-muted-foreground">
                            456 Business Ave, Floor 20<br />
                            New York, NY 10001
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border/50 text-center">
                  <AnimatedButton variant="glow" size="lg">
                    <Link href="/enterprise" className="flex items-center gap-2">
                      Contact Enterprise Sales
                      <Send className="h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                </div>
              </div>
            </GlowEffect>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 