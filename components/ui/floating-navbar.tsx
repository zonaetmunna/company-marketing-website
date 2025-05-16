"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FloatingNavbarProps {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}

export const FloatingNavbar = ({ navItems, className }: FloatingNavbarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const shouldFloat = scrollY > 100

  return (
    <AnimatePresence mode="wait">
      {shouldFloat && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto z-50 w-fit px-8 py-2.5 rounded-full border border-border/40 bg-background/80 shadow-lg backdrop-blur-md",
            className,
          )}
        >
          <nav className="flex items-center gap-0.5 sm:gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors",
                  "hover:text-foreground/80",
                  activeIndex === index ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <div className="flex items-center gap-1">
                  {item.icon && <span className="h-4 w-4">{item.icon}</span>}
                  <span>{item.name}</span>
                </div>
                {activeIndex === index && (
                  <motion.div
                    layoutId="navbar-active-link"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
