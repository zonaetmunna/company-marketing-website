import { Breadcrumb } from "@/components/breadcrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import SupportCategories from "@/components/support/support-categories"
import SupportContact from "@/components/support/support-contact"
import SupportFAQ from "@/components/support/support-faq"
import SupportHero from "@/components/support/support-hero"
import SupportResources from "@/components/support/support-resources"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | Your Company",
  description: "Get help with our products and services",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Support", href: "/support", active: true },
          ]}
        />

        <SupportHero />

        <AnimatedBackground variant="grid" intensity="light" className="mt-16 rounded-xl">
          <SupportCategories />
        </AnimatedBackground>

        <SupportFAQ />

        <AnimatedBackground variant="dots" intensity="light" className="mt-16 rounded-xl">
          <SupportResources />
        </AnimatedBackground>

        <SupportContact />
      </div>

      <Footer />
    </div>
  )
}
