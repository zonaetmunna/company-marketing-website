"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How do I get started with your platform?",
    answer: "Getting started is easy! Simply sign up for an account, verify your email, and follow our onboarding guide. You'll be up and running in minutes."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."
  },
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR to keep your data safe."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! We provide 24/7 support via live chat, email, and phone. Our team is always ready to help you succeed."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "We offer integrations with over 100+ popular tools and services. You can also use our REST API to build custom integrations."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can cancel anytime. Your account will remain active until the end of your billing period, and you can export your data at any time."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact us for a full refund."
  }
]

export default function SupportFAQ() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <TextGlowHover className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </TextGlowHover>
            <p className="mt-4 text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 