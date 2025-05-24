import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedText } from "@/components/ui/animated-text";
import { CursorFollow } from "@/components/ui/cursor-follow";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";

import ClientsSection from "@/components/clients-section";
import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import FoundersSection from "@/components/founders-section";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import MetricsSection from "@/components/metrics-section";
import Navbar from "@/components/navbar";
import NewsletterSection from "@/components/newsletter-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";

import { FileText, Home, Info, Phone, ShoppingBag } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  {
    name: "Products",
    link: "/products",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <CursorFollow />
      <Navbar />
      <FloatingNavbar navItems={navItems} />
      <ScrollIndicator
        scrollToId="features"
        showText
        text="Scroll to explore"
      />

      <Spotlight className="max-w-full">
        <HeroSection />
      </Spotlight>

      <MetricsSection />

      <AnimatedBackground variant="grid" intensity="light">
        <WavyBackground className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center mb-12">
            <AnimatedText
              text="Transform Your Business with Our Solutions"
              className="text-3xl md:text-5xl font-bold mb-4"
              animation="typewriter"
            />
            <TextReveal
              text="We help companies of all sizes reach their goals with innovative solutions and strategic thinking."
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              animationType="wave"
            />
          </div>
          <FeaturesSection />
        </WavyBackground>
      </AnimatedBackground>

      <HowItWorksSection />

      <ClientsSection />

      <AnimatedBackground variant="dots" intensity="light">
        <TestimonialsSection />
      </AnimatedBackground>

      <FoundersSection />

      <FAQSection />

      <AnimatedBackground variant="waves" intensity="light">
        <PricingSection />
      </AnimatedBackground>

      <NewsletterSection />

      <CTASection />

      <Footer />
    </div>
  );
}
