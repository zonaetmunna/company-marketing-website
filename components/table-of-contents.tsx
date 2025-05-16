"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface TableOfContentsItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TableOfContentsItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [items])

  const handleClick = (id: string) => {
    setActiveId(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={cn("bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/40", className)}>
      <h2 className="text-lg font-semibold mb-4">On This Page</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                "text-sm w-full text-left px-3 py-1.5 rounded-md transition-colors relative flex items-center",
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              {activeId === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-5 bg-primary rounded-full"
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className="ml-2">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
