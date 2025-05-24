"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const testimonials = [
  {
    quote:
      "Joining this company was one of the best career decisions I've made. The culture of continuous learning and innovation has helped me grow both professionally and personally.",
    name: "Alex Chen",
    title: "Senior Software Engineer",
    avatar: "/avatars/alex-chen.jpg",
    initials: "AC",
  },
  {
    quote:
      "I love how everyone's ideas are valued here, regardless of your position. The collaborative environment and supportive leadership have made my work incredibly fulfilling.",
    name: "Sarah Johnson",
    title: "Product Designer",
    avatar: "/avatars/sarah-johnson.jpg",
    initials: "SJ",
  },
  {
    quote:
      "The work-life balance is exceptional. I can pursue challenging projects while still having time for my family and personal interests. That's surprisingly rare in tech companies.",
    name: "Michael Rodriguez",
    title: "DevOps Engineer",
    avatar: "/avatars/michael-rodriguez.jpg",
    initials: "MR",
  },
  {
    quote:
      "I've been here for three years, and I'm still excited to come to work each day. The projects are meaningful, and I can directly see the impact of my work on our customers.",
    name: "Priya Patel",
    title: "Data Scientist",
    avatar: "/avatars/priya-patel.jpg",
    initials: "PP",
  },
  {
    quote:
      "The mentorship I've received has been incredible. Senior team members are always willing to share their knowledge and help you advance your career.",
    name: "David Kim",
    title: "Marketing Manager",
    avatar: "/avatars/david-kim.jpg",
    initials: "DK",
  },
]

export default function CareersTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            Employee Stories
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hear From Our Team
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our employees are our greatest asset. Here's what they have to say about working with us.
          </p>
        </div>
        
        {isMobile ? (
          <div className="mt-12">
            <Card className="relative overflow-hidden p-6 shadow-lg">
              <Quote className="absolute right-4 top-4 h-6 w-6 text-primary/20" />
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].initials}</AvatarFallback>
                </Avatar>
                <div>
                  <blockquote className="mb-4 text-lg font-medium italic">"{testimonials[currentIndex].quote}"</blockquote>
                  <div className="text-sm">
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="mt-12">
            <InfiniteMovingCards
              items={testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="h-full p-6 shadow-md">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <Quote className="mb-4 h-10 w-10 text-primary/30" />
                      <blockquote className="text-lg font-medium italic">"{testimonial.quote}"</blockquote>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              direction="right"
              speed="slow"
            />
          </div>
        )}
      </div>
    </section>
  )
} 