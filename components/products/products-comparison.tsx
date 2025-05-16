"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const plans = [
  {
    name: "Standard",
    price: "$99",
    description: "For small businesses",
  },
  {
    name: "Professional",
    price: "$199",
    description: "For growing businesses",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    description: "For large organizations",
  },
]

const features = [
  {
    name: "Users",
    standard: "Up to 10",
    professional: "Up to 50",
    enterprise: "Unlimited",
  },
  {
    name: "Storage",
    standard: "50GB",
    professional: "250GB",
    enterprise: "Unlimited",
  },
  {
    name: "API Access",
    standard: true,
    professional: true,
    enterprise: true,
  },
  {
    name: "Custom Branding",
    standard: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Advanced Analytics",
    standard: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "24/7 Support",
    standard: false,
    professional: false,
    enterprise: true,
  },
  {
    name: "Custom Integrations",
    standard: false,
    professional: false,
    enterprise: true,
  },
  {
    name: "SLA Guarantee",
    standard: false,
    professional: false,
    enterprise: true,
  },
]

export default function ProductsComparison() {
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Compare Plans</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the perfect plan for your business needs.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-5xl overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Features</TableHead>
                {plans.map((plan, index) => (
                  <TableHead key={index} className={plan.highlighted ? "bg-primary/10 text-center" : "text-center"}>
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="text-2xl font-bold">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.description}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-muted-foreground" />
                      )
                    ) : (
                      feature.standard
                    )}
                  </TableCell>
                  <TableCell className={`text-center ${plans[1].highlighted ? "bg-primary/10" : ""}`}>
                    {typeof feature.professional === "boolean" ? (
                      feature.professional ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-muted-foreground" />
                      )
                    ) : (
                      feature.professional
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-muted-foreground" />
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
