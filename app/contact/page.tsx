import type { Metadata } from "next"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"
import ContactFAQ from "@/components/contact/contact-faq"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Home, Info, Phone, ShoppingBag, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Your Company",
  description: "Get in touch with our team for inquiries, support, or to discuss your project",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <ContactHero />

      <AnimatedBackground variant="dots" intensity="light">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </AnimatedBackground>

      <ContactFAQ />
      <Footer />
    </div>
  )
}
