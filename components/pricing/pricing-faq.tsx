"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment providers.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, you'll receive a prorated credit for your next billing cycle.",
  },
  {
    question: "What happens after my free trial?",
    answer:
      "After your 14-day free trial ends, your account will automatically switch to your selected plan. We'll send you reminders before the trial ends, and you can cancel anytime during the trial period with no charges.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all plans. If you're not satisfied with our service, contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "No, there are no long-term contracts or commitments. You can cancel your subscription at any time. For annual plans, you'll receive service until the end of your paid term.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information about our discount programs.",
  },
]

export default function PricingFAQ() {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Have a question? Find answers to common questions about our pricing and
          plans.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          Still have questions?{" "}
          <a
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  )
} 