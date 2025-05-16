"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { TextReveal } from "@/components/ui/text-reveal"
import { GlowEffect } from "@/components/ui/glow-effect"

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients can be fully onboarded within 2-4 weeks depending on the complexity of your needs. Our streamlined process ensures a smooth transition with minimal disruption to your operations.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes, we offer custom integrations with a wide range of business tools and platforms. Our team can develop tailored connections to your existing systems to ensure seamless data flow and process automation.",
  },
  {
    question: "What type of support is included?",
    answer:
      "All plans include access to our 24/7 support team via chat, email, and phone. Enterprise clients also receive a dedicated account manager and priority response times backed by our comprehensive SLA.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "Our standard agreements are 12 months, but we offer flexible options to suit your business needs. We also provide a 30-day satisfaction guarantee for new clients so you can try our platform with confidence.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We maintain SOC 2 Type II compliance, implement bank-level encryption, and conduct regular penetration testing. Your data is hosted in redundant, geo-distributed data centers with 99.99% uptime.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You can upgrade your plan at any time, with the new pricing taking effect immediately. Downgrades can be scheduled for your next billing cycle. Our flexible approach ensures you only pay for what you need.",
  },
  {
    question: "Do you offer training for my team?",
    answer:
      "Yes, all plans include comprehensive onboarding and training for your team. We offer both live sessions and on-demand resources to ensure your team can maximize the value of our platform from day one.",
  },
  {
    question: "How do you handle data migration?",
    answer:
      "Our experienced data migration team handles the entire process, from initial assessment to validation. We use secure, automated tools to transfer your data accurately and efficiently, with minimal involvement required from your team.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [searchQuery, setSearchQuery] = useState("")
  const [expanded, setExpanded] = useState<string | undefined>(undefined)

  const filteredFaqs = faqs.filter((faq) => {
    const searchTerms = searchQuery.toLowerCase().split(" ")
    const questionText = faq.question.toLowerCase()
    const answerText = faq.answer.toLowerCase()

    return searchTerms.every((term) => questionText.includes(term) || answerText.includes(term))
  })

  return (
    <section ref={ref} className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          center
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <GlowEffect className="mb-8" showOnlyOnHover>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </GlowEffect>

          <Card className="border border-border/40">
            <CardHeader className="px-6 py-4 border-b border-border/40">
              <CardDescription>
                Found {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible value={expanded} onValueChange={setExpanded} className="w-full">
                <AnimatePresence>
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AccordionItem value={`item-${index}`} className="border-b border-border/40 last:border-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <TextReveal
                            text={faq.question}
                            animationType="fade"
                            className="text-base font-medium text-left"
                            delay={0.2 + index * 0.05}
                          />
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Accordion>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
