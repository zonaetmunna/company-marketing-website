"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

const blogPosts = [
  {
    title: "How AI is Revolutionizing Business Analytics",
    excerpt:
      "Explore how artificial intelligence is transforming data analytics and providing businesses with unprecedented insights.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2025",
    categories: ["AI", "Analytics"],
    slug: "ai-revolutionizing-business-analytics",
  },
  {
    title: "The Future of Remote Work: Trends and Technologies",
    excerpt:
      "As remote work becomes the new normal, discover the emerging trends and technologies shaping the future of distributed teams.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2025",
    categories: ["Remote Work", "Technology"],
    slug: "future-of-remote-work",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt:
      "Small businesses are increasingly targeted by cybercriminals. Learn essential security practices to protect your business.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 3, 2025",
    categories: ["Cybersecurity", "Small Business"],
    slug: "cybersecurity-best-practices-small-businesses",
  },
  {
    title: "Cloud Migration: Strategies for a Seamless Transition",
    excerpt:
      "Moving to the cloud can be complex. Discover proven strategies for a smooth and successful cloud migration.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2025",
    categories: ["Cloud", "Strategy"],
    slug: "cloud-migration-strategies",
  },
  {
    title: "The Rise of Low-Code Development Platforms",
    excerpt:
      "Low-code platforms are changing how businesses build applications. Learn how they can accelerate your digital initiatives.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 10, 2025",
    categories: ["Development", "Low-Code"],
    slug: "rise-of-low-code-development",
  },
  {
    title: "Data Privacy Regulations: What Businesses Need to Know",
    excerpt:
      "With increasing regulations like GDPR and CCPA, understanding data privacy requirements is essential for modern businesses.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2025",
    categories: ["Data Privacy", "Compliance"],
    slug: "data-privacy-regulations",
  },
]

export default function BlogList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="space-y-12">
      <h2 className="text-2xl font-bold">Latest Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0">
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, idx) => (
                      <Badge key={idx} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="mb-4 flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  <p className="mb-6 text-muted-foreground">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
