"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Magnetic } from "@/components/ui/magnetic"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CustomShapeDivider } from "@/components/ui/custom-shape-divider"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Parallax effect
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  useEffect(() => {
    setMounted(true)

    if (mounted) {
      // Staggered text animation
      const chars = gsap.utils.toArray(".hero-heading .char")

      const tl = gsap.timeline()

      tl.fromTo(
        chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.8,
          ease: "power4.out",
        },
      )

      // Floating elements animation
      gsap.to(".floating-element", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      })

      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.2,
          delay: 0.5,
          ease: "power4.inOut",
        },
      )

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
        },
      )
    }

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(".hero-heading .char")
      gsap.killTweensOf(".floating-element")
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden bg-gradient-3">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`floating-element absolute w-${Math.floor(Math.random() * 16) + 8} h-${Math.floor(Math.random() * 16) + 8} rounded-full bg-primary/5 blur-xl`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div ref={contentRef} className="flex flex-col justify-center space-y-8" style={{ opacity }}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Just Released: Version 2.0
              </div>

              <h1 ref={headingRef} className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {/* Split text for character animation */}
                {"Transform Your Business".split("").map((char, index) => (
                  <span key={index} className="char inline-block overflow-hidden">
                    <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
                  </span>
                ))}
                <span className="block mt-2 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  {"With Innovation".split("").map((char, index) => (
                    <span key={`second-${index}`} className="char inline-block overflow-hidden">
                      <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
                    </span>
                  ))}
                </span>
              </h1>

              <div className="max-w-[600px] mt-4">
                <TextGenerateEffect
                  words="We help companies of all sizes reach their goals with innovative solutions and strategic thinking that drive real business impact."
                  className="text-xl text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <Magnetic>
                <AnimatedButton variant="glow" size="lg">
                  <Link href="/demo" className="flex items-center gap-2">
                    Get Started
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </AnimatedButton>
              </Magnetic>
              <Magnetic>
                <AnimatedButton variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </AnimatedButton>
              </Magnetic>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-full border-2 border-background transition-transform hover:scale-110 hover:z-10"
                  >
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${i}`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">2,000+</span> companies worldwide
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="relative flex items-center justify-center lg:justify-end overflow-hidden"
            style={{ y, opacity }}
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 mix-blend-overlay"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Dashboard Preview"
                fill
                className="object-cover"
                priority
              />

              {/* Floating UI elements */}
              <div className="absolute top-[10%] right-[10%] w-24 h-16 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg backdrop-blur-sm p-2 z-20 floating-element">
                <div className="w-full h-2 bg-primary/20 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-primary/20 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-primary/20 rounded"></div>
              </div>

              <div className="absolute bottom-[15%] left-[10%] w-32 h-32 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg backdrop-blur-sm p-3 z-20 floating-element">
                <div className="w-full h-16 bg-primary/10 rounded mb-2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/30"></div>
                </div>
                <div className="w-full h-2 bg-primary/20 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-primary/20 rounded"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      <CustomShapeDivider shape="wave" position="bottom" className="translate-y-[1px]" />
    </section>
  )
}
