"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import SectionHeading from "@/components/section-heading"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const products = [
  {
    name: "Enterprise Suite",
    description: "A comprehensive solution for large organizations with complex needs.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Advanced Analytics", "Enterprise Security", "Custom Workflows", "24/7 Support"],
    badge: "Popular",
    slug: "enterprise-suite",
  },
  {
    name: "Business Intelligence Platform",
    description: "Transform your data into actionable insights with our powerful BI tools.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "Custom Reports"],
    badge: "New",
    slug: "business-intelligence",
  },
  {
    name: "Cloud Management Solution",
    description: "Simplify and optimize your cloud infrastructure with our management platform.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Multi-cloud Support", "Cost Optimization", "Security Monitoring", "Automated Scaling"],
    badge: "",
    slug: "cloud-management",
  },
  {
    name: "Digital Workplace",
    description: "A unified platform for communication, collaboration, and productivity.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Team Collaboration", "Document Management", "Project Tracking", "Mobile Access"],
    badge: "",
    slug: "digital-workplace",
  },
  {
    name: "Security Suite",
    description: "Comprehensive protection for your digital assets and infrastructure.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Threat Detection", "Vulnerability Management", "Compliance Tools", "Security Training"],
    badge: "Featured",
    slug: "security-suite",
  },
  {
    name: "Customer Experience Platform",
    description: "Deliver exceptional customer experiences across all touchpoints.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Omnichannel Support", "Customer Analytics", "Personalization", "Feedback Management"],
    badge: "",
    slug: "customer-experience",
  },
]

export default function ProductsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && gridRef.current) {
      const cards = gsap.utils.toArray(".product-card")

      // Create a staggered entrance for the cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      tl.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
      )

      // Add hover animations
      cards.forEach((card: any) => {
        const image = card.querySelector(".product-image")
        const badge = card.querySelector(".product-badge")
        const features = card.querySelectorAll(".product-feature")

        card.addEventListener("mouseenter", () => {
          // Animate the card
          gsap.to(card, {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.3,
          })

          // Animate the image
          if (image) {
            gsap.to(image, {
              scale: 1.05,
              duration: 0.5,
            })
          }

          // Animate the badge
          if (badge) {
            gsap.to(badge, {
              scale: 1.1,
              duration: 0.3,
            })
          }

          // Animate the features
          gsap.to(features, {
            x: 5,
            stagger: 0.05,
            duration: 0.3,
          })
        })

        card.addEventListener("mouseleave", () => {
          // Reset the card
          gsap.to(card, {
            y: 0,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            duration: 0.3,
          })

          // Reset the image
          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.5,
            })
          }

          // Reset the badge
          if (badge) {
            gsap.to(badge, {
              scale: 1,
              duration: 0.3,
            })
          }

          // Reset the features
          gsap.to(features, {
            x: 0,
            stagger: 0.05,
            duration: 0.3,
          })
        })
      })
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Our Product Lineup"
          description="Discover our suite of innovative solutions designed to help your business thrive"
          center
        />

        <div ref={gridRef} className="mx-auto mt-16 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="rounded-[22px] p-0.5" containerClassName="rounded-[22px]">
                <Card className="h-full overflow-hidden rounded-[22px] border-0">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="product-image aspect-[3/2] w-full object-cover transition-all duration-300"
                      />
                    </div>
                    {product.badge && (
                      <Badge
                        className="product-badge absolute right-3 top-3 z-10 transition-all duration-300"
                        variant={product.badge === "New" ? "default" : "secondary"}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="product-feature flex items-center transition-all duration-200">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full group">
                      <Link href={`/products/${product.slug}`}>
                        <span>Learn More</span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <span>Request Custom Solution</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
