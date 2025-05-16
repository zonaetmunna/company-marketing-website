import type { Metadata } from "next"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import BlogHero from "@/components/blog/blog-hero"
import BlogFeatured from "@/components/blog/blog-featured"
import BlogList from "@/components/blog/blog-list"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Home, Info, Phone, ShoppingBag, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Your Company",
  description: "Insights, news, and resources from our team of experts",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <BlogHero />

      <AnimatedBackground variant="grid" intensity="light">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BlogFeatured />
              <BlogList />
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-20 space-y-10">
                <BlogCategories />
                <BlogNewsletter />
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      <Footer />
    </div>
  )
}
