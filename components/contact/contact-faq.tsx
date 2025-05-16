"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer a comprehensive range of services including digital transformation, custom software development, mobile app development, cloud solutions, cybersecurity, data analytics, and more. Visit our Services page for a complete list.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 6-12 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our support team is available 24/7 for critical issues.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. The best model depends on your project's nature and requirements, which we'll discuss during our consultation.",
  },
  {
    question: "Can you work with our existing systems and technologies?",
    answer:
      "Absolutely. We have experience integrating with a wide range of existing systems and technologies. Our team will assess your current infrastructure and recommend the best approach for seamless integration.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "Security is a top priority. We implement industry best practices for data protection, including encryption, secure coding practices, regular security audits, and compliance with relevant regulations like GDPR and CCPA.",
  },
]

export default function ContactFAQ() {
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
