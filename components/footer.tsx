"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { GlowEffect } from "@/components/ui/glow-effect"
import { HoverHighlight } from "@/components/ui/hover-highlight"
import { CustomShapeDivider } from "@/components/ui/custom-shape-divider"

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Product One", href: "/products/product-one" },
        { name: "Product Two", href: "/products/product-two" },
        { name: "Product Three", href: "/products/product-three" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Guides", href: "/guides" },
        { name: "Support", href: "/support" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="relative w-full bg-muted/30">
      <CustomShapeDivider shape="wave" position="top" className="-translate-y-[1px]" height={80} />

      <GlowEffect className="w-full pt-16" showOnlyOnHover={true}>
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block font-bold text-xl mb-4">
                <TextGlowHover staggerChildren>YourCompany</TextGlowHover>
              </Link>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Empowering businesses with innovative solutions since 2015. Transforming challenges into opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AnimatedTooltip content={social.label}>
                      <Magnetic>
                        <Link href={social.href} className="text-muted-foreground hover:text-foreground">
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </Link>
                      </Magnetic>
                    </AnimatedTooltip>
                  </motion.div>
                ))}
              </div>
            </div>

            {footerLinks.map((group, groupIndex) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-medium">
                  <TextGlowHover>{group.title}</TextGlowHover>
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <HoverHighlight>
                          <TextGlowHover>{link.name}</TextGlowHover>
                        </HoverHighlight>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 YourCompany Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                <TextGlowHover>Privacy</TextGlowHover>
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                <TextGlowHover>Terms</TextGlowHover>
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                <TextGlowHover>Cookies</TextGlowHover>
              </Link>
            </div>
          </div>
        </div>
      </GlowEffect>
    </footer>
  )
}
