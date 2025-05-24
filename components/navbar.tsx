"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/ui/glow-effect"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { HoverHighlight } from "@/components/ui/hover-highlight"
import { Magnetic } from "@/components/ui/magnetic"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Link from "next/link"
import * as React from "react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Product One",
    href: "/products/product-one",
    description: "Our flagship product that revolutionizes your workflow.",
  },
  {
    title: "Product Two",
    href: "/products/product-two",
    description: "Streamline your operations with our advanced solution.",
  },
  {
    title: "Product Three",
    href: "/products/product-three",
    description: "The ultimate tool for maximizing your productivity.",
  },
]

export default function Navbar() {
  return (
    <GlowEffect
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      glowSize={600}
      showOnlyOnHover={true}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <TextGlowHover className="hidden font-bold text-xl sm:inline-block" staggerChildren>
                YourCompany
              </TextGlowHover>
            </motion.div>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 glass-effect">
              <MobileNav />
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <DesktopNav />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <AnimatedTooltip content="Contact us for more information">
            <Link href="/contact" className="hidden md:block">
              <HoverHighlight>
                <Button variant="ghost">Contact</Button>
              </HoverHighlight>
            </Link>
          </AnimatedTooltip>
          <Magnetic>
            <AnimatedButton variant="glow">
              <Link href="/demo">Get Demo</Link>
            </AnimatedButton>
          </Magnetic>
        </div>
      </div>
    </GlowEffect>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TextGlowHover>Products</TextGlowHover>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] glass-effect">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <TextGlowHover>About</TextGlowHover>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <TextGlowHover>Pricing</TextGlowHover>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <TextGlowHover>Blog</TextGlowHover>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <TextGlowHover>Services</TextGlowHover>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/support" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <TextGlowHover>Support</TextGlowHover>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <TextGlowHover className="font-bold">YourCompany</TextGlowHover>
      </Link>
      <div className="flex flex-col space-y-3">
        <Link href="/products" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Products</TextGlowHover>
        </Link>
        <Link href="/about" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>About</TextGlowHover>
        </Link>
        <Link href="/pricing" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Pricing</TextGlowHover>
        </Link>
        <Link href="/blog" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Blog</TextGlowHover>
        </Link>
        <Link href="/services" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Services</TextGlowHover>
        </Link>
        <Link href="/support" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Support</TextGlowHover>
        </Link>
        <Link href="/contact" className="font-medium transition-colors hover:text-foreground/80">
          <TextGlowHover>Contact</TextGlowHover>
        </Link>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <HoverGlowCard>
            <a
              ref={ref}
              className={cn(
                "block select-none relative z-50 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className,
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">
                <TextGlowHover>{title}</TextGlowHover>
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            </a>
          </HoverGlowCard>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
