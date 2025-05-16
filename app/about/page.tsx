import { Spotlight } from "@/components/ui/spotlight"
import { WavyBackground } from "@/components/ui/wavy-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { AnimatedBackground } from "@/components/ui/animated-background"
import AboutHero from "@/components/about/about-hero"
import AboutMission from "@/components/about/about-mission"
import AboutTeam from "@/components/about/about-team"
import AboutTimeline from "@/components/about/about-timeline"
import AboutValues from "@/components/about/about-values"
import AboutCTA from "@/components/about/about-cta"
import FoundersSection from "@/components/founders-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Home, Info, Phone, ShoppingBag, FileText } from "lucide-react"

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <Spotlight className="max-w-full">
        <AboutHero />
      </Spotlight>

      <AnimatedBackground variant="grid" intensity="light">
        <AboutMission />
      </AnimatedBackground>

      <WavyBackground className="py-12 md:py-24 lg:py-32">
        <AboutValues />
      </WavyBackground>

      <FoundersSection />

      <AnimatedBackground variant="dots" intensity="light">
        <AboutTimeline />
      </AnimatedBackground>

      <AboutTeam />
      <AboutCTA />
      <Footer />
    </div>
  )
}
