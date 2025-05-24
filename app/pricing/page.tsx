import { Breadcrumb } from "@/components/breadcrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import PricingComparison from "@/components/pricing/pricing-comparison"
import PricingCTA from "@/components/pricing/pricing-cta"
import PricingFAQ from "@/components/pricing/pricing-faq"

import PricingPlans from "@/components/pricing/pricing-plans"
import PricingTestimonials from "@/components/pricing/pricing-testimonials"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Your Company",
  description: "Transparent pricing plans for businesses of all sizes",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pricing", href: "/pricing", active: true },
          ]}
        />

        <div className="text-center max-w-3xl mx-auto mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <PricingPlans />

        <AnimatedBackground variant="grid" intensity="light" className="mt-24 rounded-xl">
          <PricingComparison />
        </AnimatedBackground>

        <PricingTestimonials />

        <AnimatedBackground variant="dots" intensity="light" className="mt-24 rounded-xl">
          <PricingFAQ />
        </AnimatedBackground>

        <PricingCTA />
      </div>

      <Footer />
    </div>
  )
}
