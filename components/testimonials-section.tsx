"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import SectionHeading from "@/components/section-heading"

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we operate. The ROI has been incredible and the support team is always available when we need them.",
    name: "Alex Johnson",
    title: "CEO, TechCorp",
    image: "/placeholder.svg?height=200&width=200",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "Implementation was smooth and the results were immediate. The analytics capabilities have given us insights we never had before. Highly recommended!",
    name: "Sarah Williams",
    title: "CTO, InnovateCo",
    image: "/placeholder.svg?height=200&width=200",
    company: "InnovateCo",
    rating: 5,
  },
  {
    quote:
      "The analytics capabilities alone are worth the investment. We've gained invaluable insights that have directly contributed to our growth strategy.",
    name: "Michael Chen",
    title: "Data Director, AnalyticsPro",
    image: "/placeholder.svg?height=200&width=200",
    company: "AnalyticsPro",
    rating: 5,
  },
  {
    quote:
      "Customer support is exceptional. They're always available and incredibly helpful. The product itself has exceeded our expectations in every way.",
    name: "Jessica Miller",
    title: "Operations Manager, ServiceFirst",
    image: "/placeholder.svg?height=200&width=200",
    company: "ServiceFirst",
    rating: 5,
  },
  {
    quote:
      "We've seen a 200% increase in productivity since implementing this solution. The automation features have freed up our team to focus on strategic initiatives.",
    name: "David Wilson",
    title: "COO, GrowthInc",
    image: "/placeholder.svg?height=200&width=200",
    company: "GrowthInc",
    rating: 5,
  },
  {
    quote:
      "The security features give us peace of mind, and the user interface is intuitive and easy to navigate. It's been a game-changer for our organization.",
    name: "Emily Rodriguez",
    title: "IT Director, SecureTech",
    image: "/placeholder.svg?height=200&width=200",
    company: "SecureTech",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get current testimonial and two adjacent ones for desktop view
  const currentTestimonial = testimonials[activeIndex]
  const nextIndex = (activeIndex + 1) % testimonials.length
  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
  const nextTestimonialItem = testimonials[nextIndex]
  const prevTestimonialItem = testimonials[prevIndex]

  return (
    <section ref={ref} className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Trusted by Industry Leaders"
          description="Don't just take our word for it. See what our customers have to say about their experience."
          center
        />

        <div className="mx-auto mt-16 max-w-6xl">
          {/* Mobile View - Single Testimonial */}
          <div className="block md:hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedGradientBorder borderWidth={1} animate={isInView}>
                <Card className="rounded-[22px] border-0">
                  <CardContent className="p-6">
                    <div className="flex space-x-0.5 mb-4">
                      {Array(currentTestimonial.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                    </div>
                    <blockquote className="text-lg font-semibold leading-snug mb-4">
                      "{currentTestimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center space-x-4">
                      <AnimatedTooltip content={currentTestimonial.company}>
                        <AnimatedImage
                          src={currentTestimonial.image || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                          animation="zoom-in"
                        />
                      </AnimatedTooltip>
                      <div>
                        <p className="font-semibold">{currentTestimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{currentTestimonial.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </AnimatedGradientBorder>
            </motion.div>
          </div>

          {/* Desktop View - Three Testimonials */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
              {/* Previous Testimonial */}
              <motion.div
                key={`prev-${prevIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 0.3 }}
                className="transform scale-95 opacity-70"
              >
                <Card className="h-full border border-border/40">
                  <CardContent className="p-6">
                    <div className="flex space-x-0.5 mb-4">
                      {Array(prevTestimonialItem.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                    </div>
                    <blockquote className="text-sm font-medium leading-snug mb-4 line-clamp-6">
                      "{prevTestimonialItem.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center space-x-3">
                      <AnimatedImage
                        src={prevTestimonialItem.image || "/placeholder.svg"}
                        alt={prevTestimonialItem.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                        animation="fade-in"
                      />
                      <div>
                        <p className="font-medium text-sm">{prevTestimonialItem.name}</p>
                        <p className="text-xs text-muted-foreground">{prevTestimonialItem.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Current Testimonial */}
              <motion.div
                key={`current-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedGradientBorder borderWidth={1} animate={isInView}>
                  <Card className="rounded-[22px] border-0">
                    <CardContent className="p-6">
                      <div className="flex space-x-0.5 mb-4">
                        {Array(currentTestimonial.rating)
                          .fill(null)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                      </div>
                      <blockquote className="text-lg font-semibold leading-snug mb-4">
                        "{currentTestimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex items-center space-x-4">
                        <AnimatedTooltip content={currentTestimonial.company}>
                          <AnimatedImage
                            src={currentTestimonial.image || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                            animation="zoom-in"
                          />
                        </AnimatedTooltip>
                        <div>
                          <p className="font-semibold">{currentTestimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{currentTestimonial.title}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </AnimatedGradientBorder>
              </motion.div>

              {/* Next Testimonial */}
              <motion.div
                key={`next-${nextIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 0.3 }}
                className="transform scale-95 opacity-70"
              >
                <Card className="h-full border border-border/40">
                  <CardContent className="p-6">
                    <div className="flex space-x-0.5 mb-4">
                      {Array(nextTestimonialItem.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                    </div>
                    <blockquote className="text-sm font-medium leading-snug mb-4 line-clamp-6">
                      "{nextTestimonialItem.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center space-x-3">
                      <AnimatedImage
                        src={nextTestimonialItem.image || "/placeholder.svg"}
                        alt={nextTestimonialItem.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                        animation="fade-in"
                      />
                      <div>
                        <p className="font-medium text-sm">{nextTestimonialItem.name}</p>
                        <p className="text-xs text-muted-foreground">{nextTestimonialItem.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:scale-105 transition-transform group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:scale-105 transition-transform group"
            >
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-center"
          >
            <a href="/testimonials" className="text-primary hover:underline text-sm font-medium">
              View all testimonials →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
