import { AnimatedButton } from "@/components/ui/animated-button"
import { Magnetic } from "@/components/ui/magnetic"
import { ArrowRight } from "lucide-react"

export default function PricingCTA() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Join thousands of satisfied customers who have chosen us for their
          business needs. Start your 14-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Magnetic>
            <AnimatedButton
              variant="glow"
              size="lg"
              glowColor="rgba(124, 58, 237, 0.5)"
              className="group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
          </Magnetic>
          <Magnetic>
            <AnimatedButton variant="outline" size="lg">
              Schedule a Demo
            </AnimatedButton>
          </Magnetic>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </div>
  )
} 