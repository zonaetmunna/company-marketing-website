import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ServiceCTA from "@/components/services/service-cta"
import ServiceProcess from "@/components/services/service-process"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Your Company",
  description: "Explore our comprehensive range of services designed to transform your business",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <ServicesHero />

      <AnimatedBackground variant="grid" intensity="light">
        <ServicesList />
      </AnimatedBackground>

      <ServiceProcess />
      <ServiceCTA />
      <Footer />
    </div>
  )
}
