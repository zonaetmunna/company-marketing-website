import { Breadcrumb } from "@/components/breadcrumb"
import CareersBenefits from "@/components/careers/careers-benefits"
import CareersCTA from "@/components/careers/careers-cta"
import CareersHero from "@/components/careers/careers-hero"
import CareersOpenings from "@/components/careers/careers-openings"
import CareersTestimonials from "@/components/careers/careers-testimonials"
import CareersValues from "@/components/careers/careers-values"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Your Company",
  description: "Join our team and help shape the future of technology",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers", active: true },
          ]}
        />

        <CareersHero />

        <AnimatedBackground variant="grid" intensity="light" className="mt-16 rounded-xl">
          <CareersValues />
        </AnimatedBackground>

        <CareersBenefits />

        <div id="openings">
          <AnimatedBackground variant="dots" intensity="light" className="mt-16 rounded-xl">
            <CareersOpenings />
          </AnimatedBackground>
        </div>

        <CareersTestimonials />

        <CareersCTA />
      </div>

      <Footer />
    </div>
  )
}
