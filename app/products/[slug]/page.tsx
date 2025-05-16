import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductRelated from "@/components/products/product-related"
import { Home, Info, Phone, ShoppingBag, FileText } from "lucide-react"

// Mock product data - in a real app, this would come from a database or API
const products = [
  {
    slug: "enterprise-suite",
    name: "Enterprise Suite",
    tagline: "A comprehensive solution for large organizations",
    description:
      "Our flagship Enterprise Suite provides everything large organizations need to streamline operations, enhance productivity, and drive growth. With advanced analytics, enterprise-grade security, and customizable workflows, it's the ultimate all-in-one solution.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Feature+1",
      "/placeholder.svg?height=600&width=800&text=Feature+2",
      "/placeholder.svg?height=600&width=800&text=Feature+3",
    ],
    price: {
      monthly: "$999",
      annually: "$9,990",
      savings: "Save $2,000 annually",
    },
    rating: 4.9,
    reviewCount: 128,
    features: [
      "Advanced Analytics Dashboard",
      "Enterprise-Grade Security",
      "Custom Workflow Builder",
      "24/7 Priority Support",
      "Unlimited Team Members",
      "API Access",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Regular Strategy Sessions",
      "Compliance Management",
    ],
    specs: {
      Deployment: "Cloud or On-Premise",
      Updates: "Monthly",
      "Data Storage": "Unlimited",
      "User Roles": "Customizable",
      SSO: "Supported",
      "API Rate Limit": "100,000 requests/day",
      SLA: "99.99% uptime",
      "Backup Frequency": "Hourly",
    },
    testimonials: [
      {
        quote:
          "The Enterprise Suite has transformed how we operate. The ROI has been incredible and the support team is always available when we need them.",
        author: "Alex Johnson",
        title: "CTO, Global Enterprises Inc.",
      },
      {
        quote:
          "Implementation was smooth and the results were immediate. The analytics capabilities have given us insights we never had before.",
        author: "Sarah Williams",
        title: "Operations Director, TechCorp",
      },
    ],
    faq: [
      {
        question: "How long does implementation typically take?",
        answer:
          "For most enterprise clients, implementation takes 4-6 weeks, including data migration, customization, and training. Our dedicated implementation team works closely with you throughout the process.",
      },
      {
        question: "Can we customize the solution to our specific needs?",
        answer:
          "Absolutely. The Enterprise Suite is highly customizable. We offer both configuration options within the platform and custom development services for unique requirements.",
      },
      {
        question: "What kind of support is included?",
        answer:
          "Enterprise clients receive 24/7 priority support via phone, email, and chat. You'll also have a dedicated account manager and regular strategy sessions to ensure you're getting the most from your investment.",
      },
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence Platform",
    tagline: "Transform your data into actionable insights",
    description:
      "Our Business Intelligence Platform helps you make sense of your data with powerful analytics, customizable dashboards, and predictive insights. Turn raw data into strategic decisions that drive business growth.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Dashboard",
      "/placeholder.svg?height=600&width=800&text=Reports",
      "/placeholder.svg?height=600&width=800&text=Analytics",
    ],
    price: {
      monthly: "$499",
      annually: "$4,990",
      savings: "Save $1,000 annually",
    },
    rating: 4.8,
    reviewCount: 94,
    features: [
      "Real-time Data Analytics",
      "Customizable Dashboards",
      "Predictive Insights",
      "Data Visualization Tools",
      "Automated Reporting",
      "Data Integration Hub",
      "Role-based Access Control",
      "Export & Sharing Options",
      "Alert & Notification System",
      "Historical Data Analysis",
    ],
    specs: {
      Deployment: "Cloud",
      Updates: "Bi-weekly",
      "Data Storage": "10TB included",
      "User Roles": "5 predefined + custom",
      SSO: "Supported",
      "API Rate Limit": "50,000 requests/day",
      SLA: "99.9% uptime",
      "Backup Frequency": "Daily",
    },
    testimonials: [
      {
        quote:
          "The BI Platform has completely changed how we make decisions. We can now see trends and opportunities we were missing before.",
        author: "Michael Chen",
        title: "Data Director, AnalyticsPro",
      },
      {
        quote:
          "The predictive analytics feature alone has paid for the platform many times over. It's like having a crystal ball for our business.",
        author: "Jessica Miller",
        title: "CEO, DataDriven Co.",
      },
    ],
    faq: [
      {
        question: "What data sources can we connect to?",
        answer:
          "Our platform supports connections to virtually any data source including databases (SQL, NoSQL), cloud services, APIs, spreadsheets, and more. We have pre-built connectors for popular services and can develop custom connectors if needed.",
      },
      {
        question: "How user-friendly is the platform for non-technical users?",
        answer:
          "Very! We've designed the interface to be intuitive for users of all technical levels. Non-technical users can easily create dashboards, reports, and visualizations with our drag-and-drop interface, while technical users can leverage advanced features when needed.",
      },
      {
        question: "Can we share reports with external stakeholders?",
        answer:
          "Yes, you can share reports and dashboards with external users through secure links, scheduled email reports, or by granting limited access to specific dashboards. All sharing options include security controls to protect your data.",
      },
    ],
  },
  // Add more products as needed
]

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Your Company`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      {/* Breadcrumb */}
      <div className="container px-4 py-4 md:py-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/products" className="hover:text-foreground">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl border border-primary/10">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{product.name}</h1>
                <p className="mt-2 text-xl text-muted-foreground">{product.tagline}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{product.price.monthly}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Annual billing: {product.price.annually}</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {product.price.savings}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <AnimatedBackground variant="grid" intensity="light">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {product.features.map((feature, index) => (
                    <Card key={index} className="border border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-medium">{feature}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-xl border border-primary/10">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} feature ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specs">
                <Card className="border border-primary/10">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(product.specs).map(([key, value], index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-border/40 last:border-0">
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials">
                <div className="grid gap-6 md:grid-cols-2">
                  {product.testimonials.map((testimonial, index) => (
                    <Card key={index} className="border border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <Card className="border border-primary/10">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {product.faq.map((item, index) => (
                        <div key={index} className="pb-6 border-b border-border/40 last:border-0 last:pb-0">
                          <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                          <p className="text-muted-foreground">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedBackground>

      {/* Related Products */}
      <ProductRelated currentSlug={product.slug} />

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-1">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to transform your business?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers who have taken their operations to the next level with{" "}
              {product.name}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg">Schedule a Demo</Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
