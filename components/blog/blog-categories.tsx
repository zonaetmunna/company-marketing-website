"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Technology", count: 24, slug: "technology" },
  { name: "Digital Transformation", count: 18, slug: "digital-transformation" },
  { name: "AI & Machine Learning", count: 15, slug: "ai-machine-learning" },
  { name: "Cloud Computing", count: 12, slug: "cloud-computing" },
  { name: "Cybersecurity", count: 10, slug: "cybersecurity" },
  { name: "Software Development", count: 9, slug: "software-development" },
  { name: "Business Strategy", count: 8, slug: "business-strategy" },
  { name: "Data Analytics", count: 7, slug: "data-analytics" },
]

export default function BlogCategories() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between py-1 text-sm hover:text-primary"
                >
                  <span>{category.name}</span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
