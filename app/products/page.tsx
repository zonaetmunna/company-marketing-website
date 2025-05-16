import type { Metadata } from "next"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import ProductsHero from "@/components/products/products-hero"
import ProductsGrid from "@/components/products/products-grid"
import ProductsFeatures from "@/components/products/products-features"
import ProductsComparison from "@/components/products/products-comparison"
import ProductsCTA from "@/components/products/products-cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Home, Info, Phone, ShoppingBag, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Products | Your Company",
  description: "Explore our innovative product lineup designed to transform your business",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <ProductsHero />

      <AnimatedBackground variant="dots" intensity="light">
        <ProductsGrid />
      </AnimatedBackground>

      <ProductsFeatures />

      <AnimatedBackground variant="grid" intensity="light">
        <ProductsComparison />
      </AnimatedBackground>

      <ProductsCTA />
      <Footer />
    </div>
  )
}
