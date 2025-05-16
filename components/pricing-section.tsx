"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TextReveal } from "@/components/ui/text-reveal"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { AnimatedButton } from "@/components/ui/animated-button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: "$49",
    duration: "/month",
    features: ["Up to 5 team members", "Basic analytics", "24/7 support", "1GB storage", "API access"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with more demands.",
    price: "$99",
    duration: "/month",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "24/7 priority support",
      "10GB storage",
      "API access",
      "Custom integrations",
      "Workflow automation",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements.",
    price: "Custom",
    duration: "",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated account manager",
      "Unlimited storage",
      "API access",
      "Custom integrations",
      "Workflow automation",
      "Advanced security",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <TextReveal
            text="Simple, Transparent Pricing"
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
            animationType="slide"
          />
          <TextReveal
            text="Choose the plan that's right for your business. All plans include a 14-day free trial."
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            animationType="fade"
            delay={0.3}
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
            <div className="flex flex-col items-center">
              <AnimatedCounter
                value={2000}
                formatFn={(value) => `${value}+`}
                className="text-3xl font-bold text-primary"
              />
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter
                value={99}
                formatFn={(value) => `${value}%`}
                className="text-3xl font-bold text-primary"
                delay={0.2}
              />
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter
                value={24}
                formatFn={(value) => `${value}/7`}
                className="text-3xl font-bold text-primary"
                delay={0.4}
              />
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-lg gap-5 py-8 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("relative flex flex-col", plan.popular && "md:scale-110 md:shadow-xl")}
            >
              <HoverGlowCard
                glowColor={plan.popular ? "rgba(124, 58, 237, 1)" : "rgba(124, 58, 237, 0.5)"}
                glowOpacity={plan.popular ? 0.2 : 0.1}
              >
                <Card className={cn("relative h-full rounded-[22px]", plan.popular && "border-primary")}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>
                      <TextGlowHover>{plan.name}</TextGlowHover>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      {plan.price}
                      <span className="ml-1 text-2xl font-medium text-muted-foreground">{plan.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="ml-3 text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Magnetic>
                      <AnimatedButton
                        className="w-full"
                        variant={plan.popular ? "glow" : "outline"}
                        glowColor="rgba(124, 58, 237, 0.5)"
                      >
                        {plan.cta}
                      </AnimatedButton>
                    </Magnetic>
                  </CardFooter>
                </Card>
              </HoverGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
