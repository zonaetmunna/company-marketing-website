"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface NavItem {
  name: string
  link: string
  icon: React.ReactNode
}

interface FloatingNavbarProps {
  navItems: NavItem[]
  className?: string
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md",
        className
      )}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-accent",
              pathname === item.link && "bg-accent"
            )}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}
