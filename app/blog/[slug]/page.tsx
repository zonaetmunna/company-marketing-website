import { Breadcrumb } from "@/components/breadcrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { TableOfContents } from "@/components/table-of-contents"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { GlowEffect } from "@/components/ui/glow-effect"
import { HoverGlowCard } from "@/components/ui/hover-glow-card"
import { Separator } from "@/components/ui/separator"
import { TextGlowHover } from "@/components/ui/text-glow-hover"
import {
  ArrowLeft,
  ArrowRight,
  BookmarkPlus,
  Calendar,
  Clock,
  Facebook,
  FileText,
  Home,
  Info,
  Linkedin,
  Link as LinkIcon,
  Phone,
  Share2,
  ShoppingBag,
  Twitter,
  User
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const getBlogPost = async (slug: string) => {
  // Mock data - replace with actual data fetching
  const posts = {
    "getting-started-with-our-platform": {
      title: "Getting Started with Our Platform: A Comprehensive Guide",
      excerpt: "Learn how to set up your account, configure your workspace, and start building amazing projects with our platform.",
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Welcome to our comprehensive guide on getting started with our platform. Whether you're a developer, designer, or business owner, this guide will walk you through everything you need to know to begin your journey with us.</p>
        
        <h2 id="setting-up-account">Setting Up Your Account</h2>
        <p>The first step is creating your account. Visit our signup page and provide your basic information. You'll receive a verification email within minutes.</p>
        
        <h3 id="verification-process">Verification Process</h3>
        <p>After signing up, check your email for a verification link. Click the link to activate your account and gain full access to our platform.</p>
        
        <h2 id="workspace-configuration">Workspace Configuration</h2>
        <p>Once your account is verified, you can configure your workspace. This includes setting up your profile, choosing your preferences, and connecting any necessary integrations.</p>
        
        <h3 id="profile-setup">Profile Setup</h3>
        <p>Complete your profile by adding a photo, bio, and contact information. This helps team members identify and connect with you.</p>
        
        <h3 id="preferences">Setting Preferences</h3>
        <p>Customize your experience by setting your timezone, notification preferences, and theme settings.</p>
        
        <h2 id="first-project">Creating Your First Project</h2>
        <p>Now that your workspace is configured, let's create your first project. Click the "New Project" button and follow the setup wizard.</p>
        
        <h2 id="best-practices">Best Practices</h2>
        <p>Here are some best practices to help you get the most out of our platform:</p>
        <ul>
          <li>Keep your projects organized with clear naming conventions</li>
          <li>Use tags and categories to make content searchable</li>
          <li>Regularly backup your important data</li>
          <li>Stay updated with our latest features and updates</li>
        </ul>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Congratulations! You've successfully set up your account and created your first project. Continue exploring our platform to discover more advanced features and capabilities.</p>
      `,
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
        bio: "Senior Product Manager with 8+ years of experience in SaaS platforms"
      },
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "Getting Started",
      tags: ["tutorial", "beginner", "setup"],
      image: "/placeholder.svg"
    }
  }
  
  return posts[slug as keyof typeof posts] || null
}

const getRelatedPosts = async () => {
  return [
    {
      title: "Advanced Configuration Tips",
      excerpt: "Take your setup to the next level with these advanced configuration options.",
      slug: "advanced-configuration-tips",
      image: "/placeholder.svg",
      readTime: "5 min read"
    },
    {
      title: "Integrating with Third-Party Tools",
      excerpt: "Learn how to connect your favorite tools and services to our platform.",
      slug: "integrating-third-party-tools",
      image: "/placeholder.svg",
      readTime: "7 min read"
    },
    {
      title: "Best Practices for Team Collaboration",
      excerpt: "Discover how to work effectively with your team using our collaboration features.",
      slug: "team-collaboration-best-practices",
      image: "/placeholder.svg",
      readTime: "6 min read"
    }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Your Company Blog`,
    description: post.excerpt,
  }
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  const relatedPosts = await getRelatedPosts()

  if (!post) {
    notFound()
  }

  // Extract table of contents from the post content
  const tableOfContentsItems = [
    { id: "introduction", title: "Introduction" },
    { id: "setting-up-account", title: "Setting Up Your Account" },
    { id: "verification-process", title: "Verification Process" },
    { id: "workspace-configuration", title: "Workspace Configuration" },
    { id: "profile-setup", title: "Profile Setup" },
    { id: "preferences", title: "Setting Preferences" },
    { id: "first-project", title: "Creating Your First Project" },
    { id: "best-practices", title: "Best Practices" },
    { id: "conclusion", title: "Conclusion" },
  ]

  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${params.slug}`, active: true },
          ]}
        />

        <div className="mt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <article className="mt-8">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <TextGlowHover className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {post.title}
              </TextGlowHover>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.bio}</div>
                </div>
              </div>
              
              <Separator orientation="vertical" className="h-8" />
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <GlowEffect className="mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </GlowEffect>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <AnimatedBackground variant="dots" intensity="light" className="rounded-xl">
                <div className="prose prose-lg max-w-none p-8 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </AnimatedBackground>

              {/* Share Section */}
              <div className="mt-12 p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-20 space-y-8">
                {/* Table of Contents */}
                <GlowEffect>
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                    <TableOfContents items={tableOfContentsItems} />
                  </div>
                </GlowEffect>

                {/* Author Info */}
                <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                  <div className="flex items-start gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium mb-1">{post.author.name}</div>
                      <div className="text-sm text-muted-foreground mb-3">{post.author.bio}</div>
                      <Button variant="outline" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <TextGlowHover className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Related Articles
            </TextGlowHover>
            <p className="mt-4 text-lg text-muted-foreground">
              Continue reading with these related posts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <HoverGlowCard className="h-full">
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg h-full flex flex-col group hover:bg-background/80 transition-all duration-300">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {relatedPost.readTime}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </HoverGlowCard>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedButton variant="outline" size="lg">
              <Link href="/blog">View All Articles</Link>
            </AnimatedButton>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
