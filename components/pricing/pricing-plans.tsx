"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedButton } from "@/components/ui/animated-button"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    monthlyPrice: "$49",
    annualPrice: "$490",
    savings: "Save $98/year",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
      "API access",
      "Standard integrations",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with more demands.",
    monthlyPrice: "$99",
    annualPrice: "$990",
    savings: "Save $198/year",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "24/7 priority support",
      "10GB storage",
      "API access",
      "Custom integrations",
      "Workflow automation",
      "Team collaboration tools",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    savings: "",
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
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = gsap.utils.toArray(".pricing-card")

      // Create a staggered entrance for the cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      tl.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
      )

      // Add hover animations
      cards.forEach((card: any) => {
        const features = card.querySelectorAll(".feature-item")
        const button = card.querySelector(".pricing-button")

        card.addEventListener("mouseenter", () => {
          // Animate the card
          gsap.to(card, {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.3,
          })

          // Animate the features
          gsap.to(features, {
            x: 5,
            stagger: 0.05,
            duration: 0.3,
          })

          // Animate the button
          if (button) {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.3,
            })
          }
        })

        card.addEventListener("mouseleave", () => {
          // Reset the card
          gsap.to(card, {
            y: 0,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            duration: 0.3,
          })

          // Reset the features
          gsap.to(features, {
            x: 0,
            stagger: 0.05,
            duration: 0.3,
          })

          // Reset the button
          if (button) {
            gsap.to(button, {
              scale: 1,
              duration: 0.3,
            })
          }
        })
      })
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef}>
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center space-x-2">
          <Label htmlFor="billing-toggle" className={cn(!isAnnual && "text-primary font-medium")}>
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <div className="flex items-center gap-2">
            <Label htmlFor="billing-toggle" className={cn(isAnnual && "text-primary font-medium")}>
              Annual
            </Label>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Save up to 20%
            </Badge>
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={cn("pricing-card relative flex flex-col", plan.popular && "md:scale-105 md:shadow-xl")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {plan.popular ? (
              <AnimatedGradientBorder borderWidth={1} animate={true}>
                <Card className={cn("h-full rounded-[22px] border-0", plan.popular && "border-primary")}>
                  <PlanContent plan={plan} isAnnual={isAnnual} />
                </Card>
              </AnimatedGradientBorder>
            ) : (
              <Card className="h-full border border-border/40">
                <PlanContent plan={plan} isAnnual={isAnnual} />
              </Card>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 text-sm text-muted-foreground">
        All plans include a 14-day free trial. No credit card required.{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms and conditions
        </Link>{" "}
        apply.
      </div>
    </div>
  )
}

function PlanContent({ plan, isAnnual }: { plan: (typeof plans)[0]; isAnnual: boolean }) {
  return (
    <>
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
            {plan.monthlyPrice !== "Custom" && (
              <span className="ml-1 text-muted-foreground">/{isAnnual ? "year" : "month"}</span>
            )}
          </div>
          {isAnnual && plan.savings && <div className="text-green-600 text-sm mt-1">{plan.savings}</div>}
        </div>

        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="feature-item flex items-center">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-6">
        <Magnetic>
          <AnimatedButton
            className="pricing-button w-full"
            variant={plan.popular ? "glow" : "outline"}
            glowColor="rgba(124, 58, 237, 0.5)"
          >
            {plan.cta}
          </AnimatedButton>
        </Magnetic>
      </CardFooter>
    </>
  )
}
