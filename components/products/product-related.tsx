"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Mock related products data
const relatedProducts = [
  {
    slug: "enterprise-suite",
    name: "Enterprise Suite",
    description: "A comprehensive solution for large organizations with complex needs.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "Popular",
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence Platform",
    description: "Transform your data into actionable insights with our powerful BI tools.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "New",
  },
  {
    slug: "cloud-management",
    name: "Cloud Management Solution",
    description: "Simplify and optimize your cloud infrastructure with our management platform.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "",
  },
]

export default function ProductRelated({ currentSlug }: { currentSlug: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Filter out the current product
  const filteredProducts = relatedProducts.filter((product) => product.slug !== currentSlug)

  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = gsap.utils.toArray(".related-product-card")

      // Staggered entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      tl.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
      )

      // Hover effects
      cards.forEach((card: any) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
          })

          // Animate the image
          const image = card.querySelector(".card-image")
          if (image) {
            gsap.to(image, {
              scale: 1.1,
              duration: 0.5,
            })
          }

          // Animate the button
          const button = card.querySelector(".card-button")
          if (button) {
            gsap.to(button, {
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              duration: 0.3,
            })
          }
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
          })

          // Reset the image
          const image = card.querySelector(".card-image")
          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.5,
            })
          }

          // Reset the button
          const button = card.querySelector(".card-button")
          if (button) {
            gsap.to(button, {
              backgroundColor: "transparent",
              color: "hsl(var(--primary))",
              duration: 0.3,
            })
          }
        })
      })
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  if (filteredProducts.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">You May Also Like</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our other products that complement your selection and enhance your business capabilities.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Card key={product.slug} className="related-product-card border border-primary/10 overflow-hidden">
              <div className="relative overflow-hidden">
                {product.badge && (
                  <Badge
                    className="absolute right-3 top-3 z-10"
                    variant={product.badge === "New" ? "default" : "secondary"}
                  >
                    {product.badge}
                  </Badge>
                )}
                <div className="overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="card-image w-full object-cover aspect-[3/2] transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="card-button w-full">
                  <Link href={`/products/${product.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
