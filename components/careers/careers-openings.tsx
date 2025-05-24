"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Briefcase, ChevronRight, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const jobOpenings = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "We're looking for a senior frontend developer with expertise in React, TypeScript, and state management libraries to join our growing team.",
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Join our design team to create beautiful, intuitive interfaces that delight our users and drive product adoption.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Help define and execute our product roadmap, working closely with engineering, design, and business teams.",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Design, implement, and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote (US)",
    type: "Contract",
    description:
      "Drive our content marketing strategy across multiple channels to increase brand awareness and lead generation.",
  },
]

export default function CareersOpenings() {
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
            Open Positions
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our current openings and find where your skills and passion can make an impact.
          </p>
        </div>
        <div className="mt-12 grid gap-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <Badge variant="outline" className="rounded-full">
                          {job.department}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="mt-4 shrink-0 md:mt-0">
                      <Link href={`/careers/${job.id}`}>
                        View Position
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            View All Openings
          </Button>
        </div>
      </div>
    </section>
  )
} 