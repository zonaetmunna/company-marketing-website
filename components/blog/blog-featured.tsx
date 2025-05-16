"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

export default function BlogFeatured() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="mb-6 text-2xl font-bold">Featured Article</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">Technology</Badge>
                  <Badge variant="secondary">Digital Transformation</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">
                  <Link href="/blog/digital-transformation-strategy" className="hover:text-primary">
                    10 Essential Steps for a Successful Digital Transformation Strategy
                  </Link>
                </h3>
                <div className="mb-4 flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  May 10, 2025
                </div>
                <p className="mb-6 text-muted-foreground">
                  Digital transformation is more than just implementing new technologies—it's about fundamentally
                  changing how your business operates and delivers value to customers. In this comprehensive guide, we
                  outline the essential steps for developing and executing a successful digital transformation strategy.
                </p>
                <Link href="/blog/digital-transformation-strategy" className="text-primary hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Digital Transformation Strategy"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
