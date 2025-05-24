import { Breadcrumb } from "@/components/breadcrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { TableOfContents } from "@/components/table-of-contents"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, Shield, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Your Company",
  description: "Learn how we collect, use, and protect your personal information",
}

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Products", link: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="h-4 w-4" /> },
]

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "information-collection", title: "Information We Collect" },
  { id: "information-use", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing and Disclosure" },
  { id: "cookies", title: "Cookies and Similar Technologies" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights and Choices" },
  { id: "children", title: "Children's Privacy" },
  { id: "international", title: "International Data Transfers" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact Us" },
]

export default function PrivacyPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy", active: true },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
            </div>

            <AnimatedBackground variant="dots" intensity="light" className="rounded-xl p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="introduction" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Introduction
                  </h2>
                  <p>
                    Your Company ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website or
                    use our services.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                    policy, please do not access the site or use our services.
                  </p>
                </section>

                <section id="information-collection" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p>We may collect information about you in a variety of ways including:</p>
                  <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
                  <p>
                    When you register for an account, purchase a product, or engage with our services, we may collect
                    personally identifiable information, such as:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>Your name, email address, and contact details</li>
                    <li>Billing information and payment details</li>
                    <li>Business information, such as company name and job title</li>
                    <li>User preferences and settings</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
                  <p>
                    We may also collect information about how you access and use our website and services, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Your IP address, browser type, and operating system</li>
                    <li>Pages you view and links you click on our website</li>
                    <li>Time spent on pages and navigation patterns</li>
                    <li>Device information and identifiers</li>
                  </ul>
                </section>

                <section id="information-use" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p>We may use the information we collect about you for various purposes, including to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information, such as updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Personalize your experience and deliver content relevant to your interests</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section id="information-sharing" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                  <p>We may share your information in the following situations:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                      service providers, contractors, or agents who perform services for us.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all
                      or a portion of our assets, your information may be transferred as part of that transaction.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law
                      or in response to valid requests by public authorities.
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> We may share your information with your consent or as
                      otherwise disclosed at the time of data collection or sharing.
                    </li>
                  </ul>
                </section>

                <section id="cookies" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Cookies and Similar Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain
                    information. Cookies are files with a small amount of data which may include an anonymous unique
                    identifier.
                  </p>
                  <p>
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                  <p>We use cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>To enable certain functions of the service</li>
                    <li>To provide analytics</li>
                    <li>To store your preferences</li>
                    <li>To enable advertisements delivery, including behavioral advertising</li>
                  </ul>
                </section>

                <section id="data-security" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect
                    the security of any personal information we process. However, please also remember that we cannot
                    guarantee that the internet itself is 100% secure.
                  </p>
                </section>

                <section id="your-rights" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
                  <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>The right to access personal information we hold about you</li>
                    <li>The right to request correction of inaccurate personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the contact information provided below.
                  </p>
                </section>

                <section id="children" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <p>
                    Our services are not intended for use by children under the age of 16. We do not knowingly collect
                    personally identifiable information from children under 16. If you are a parent or guardian and you
                    are aware that your child has provided us with personal information, please contact us.
                  </p>
                </section>

                <section id="international" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                  <p>
                    Your information may be transferred to — and maintained on — computers located outside of your
                    state, province, country, or other governmental jurisdiction where the data protection laws may
                    differ from those of your jurisdiction.
                  </p>
                  <p>
                    If you are located outside the United States and choose to provide information to us, please note
                    that we transfer the data to the United States and process it there.
                  </p>
                </section>

                <section id="changes" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                    Policy are effective when they are posted on this page.
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@yourcompany.com" className="text-primary hover:underline">
                      privacy@yourcompany.com
                    </a>{" "}
                    or by mail at:
                  </p>
                  <address className="not-italic mt-2">
                    Your Company
                    <br />
                    123 Privacy Street
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </address>
                </section>
              </div>
            </AnimatedBackground>
          </div>

          <div className="md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents items={tableOfContents} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
