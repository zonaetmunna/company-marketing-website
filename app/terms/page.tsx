import { Breadcrumb } from "@/components/breadcrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { TableOfContents } from "@/components/table-of-contents"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FileText, Home, Info, Phone, Scale, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Your Company",
  description: "The terms and conditions governing your use of our services",
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
  { id: "use-license", title: "Use License" },
  { id: "restrictions", title: "Restrictions" },
  { id: "your-content", title: "Your Content" },
  { id: "service-availability", title: "Service Availability" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "termination", title: "Termination" },
  { id: "warranty-disclaimer", title: "Warranty Disclaimer" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Us" },
]

export default function TermsPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service", href: "/terms", active: true },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
            </div>

            <AnimatedBackground variant="dots" intensity="light" className="rounded-xl p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="introduction" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Introduction
                  </h2>
                  <p>
                    Welcome to Your Company. These Terms of Service ("Terms") govern your use of our website, products,
                    and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
                  </p>
                  <p>
                    Please read these Terms carefully before using our Services. If you do not agree to these Terms, you
                    may not access or use the Services.
                  </p>
                </section>

                <section id="use-license" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Use License</h2>
                  <p>
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
                    non-transferable, revocable license to access and use our Services for your personal or internal
                    business purposes.
                  </p>
                  <p>
                    This license does not include any resale or commercial use of our Services or its contents; any
                    collection and use of any product listings, descriptions, or prices; any derivative use of our
                    Services or its contents; or any use of data mining, robots, or similar data gathering and
                    extraction tools.
                  </p>
                </section>

                <section id="restrictions" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Restrictions</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Use our Services in any way that violates any applicable law or regulation</li>
                    <li>Use our Services for any harmful, fraudulent, or deceptive purpose</li>
                    <li>
                      Attempt to gain unauthorized access to any portion of our Services or any related systems or
                      networks
                    </li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of our Services</li>
                    <li>Use our Services to transmit any malware, viruses, or other harmful code</li>
                    <li>
                      Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of our Services
                    </li>
                  </ul>
                </section>

                <section id="your-content" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Your Content</h2>
                  <p>
                    Our Services may allow you to post, upload, or submit content. You retain ownership of any
                    intellectual property rights that you hold in that content.
                  </p>
                  <p>
                    When you upload, post, or submit content to our Services, you grant us a worldwide, non-exclusive,
                    royalty-free license (with the right to sublicense) to use, host, store, reproduce, modify, create
                    derivative works, communicate, publish, publicly perform, publicly display, and distribute such
                    content for the purpose of operating, promoting, and improving our Services.
                  </p>
                  <p>
                    You represent and warrant that you have all rights, power, and authority necessary to grant the
                    rights granted herein to any content that you submit.
                  </p>
                </section>

                <section id="service-availability" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                  <p>
                    We strive to ensure that our Services are available 24/7. However, we do not guarantee that our
                    Services will always be available, uninterrupted, or error-free. We may suspend, withdraw, or
                    restrict the availability of all or any part of our Services for business and operational reasons.
                  </p>
                  <p>
                    We will try to give you reasonable notice of any suspension or withdrawal. You are also responsible
                    for ensuring that all persons who access our Services through your internet connection are aware of
                    these Terms and that they comply with them.
                  </p>
                </section>

                <section id="payment-terms" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                  <p>
                    If you purchase any of our paid Services, you agree to pay all fees associated with such Services.
                    All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall
                    be responsible for payment of all such taxes, levies, or duties.
                  </p>
                  <p>
                    You agree to provide current, complete, and accurate purchase and account information for all
                    purchases made through our Services. You agree to promptly update your account and other
                    information, including your email address and credit card numbers and expiration dates, so that we
                    can complete your transactions and contact you as needed.
                  </p>
                  <p>
                    We reserve the right to change our prices at any time. If we change our prices, we will provide
                    notice of the change on the website or by email, at our option.
                  </p>
                </section>

                <section id="termination" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p>
                    We may terminate or suspend your access to our Services immediately, without prior notice or
                    liability, for any reason whatsoever, including without limitation if you breach these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use our Services will immediately cease. If you wish to terminate
                    your account, you may simply discontinue using our Services, or you may contact us to request
                    account deletion.
                  </p>
                </section>

                <section id="warranty-disclaimer" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Warranty Disclaimer</h2>
                  <p>
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT
                    ANY DEFECTS WILL BE CORRECTED. WE DO NOT WARRANT ANY SPECIFIC RESULTS FROM THE USE OF OUR SERVICES.
                  </p>
                </section>

                <section id="limitation-liability" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR AFFILIATES, OFFICERS,
                    DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
                    USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES;</li>
                    <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES;</li>
                    <li>ANY CONTENT OBTAINED FROM OUR SERVICES; AND</li>
                    <li>
                      UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON
                      WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE
                      BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                    </li>
                  </ul>
                </section>

                <section id="indemnification" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless us, our affiliates, licensors, and service
                    providers, and our and their respective officers, directors, employees, contractors, agents,
                    licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                    judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising
                    out of or relating to your violation of these Terms or your use of our Services.
                  </p>
                </section>

                <section id="governing-law" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of
                    California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any legal suit, action, or proceeding arising out of, or related to, these Terms or our Services
                    shall be instituted exclusively in the federal courts of the United States or the courts of the
                    State of California, in each case located in the City of San Francisco and County of San Francisco.
                  </p>
                </section>

                <section id="changes" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                    effect.
                  </p>
                  <p>
                    By continuing to access or use our Services after those revisions become effective, you agree to be
                    bound by the revised terms. If you do not agree to the new terms, please stop using our Services.
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:legal@yourcompany.com" className="text-primary hover:underline">
                      legal@yourcompany.com
                    </a>{" "}
                    or by mail at:
                  </p>
                  <address className="not-italic mt-2">
                    Your Company
                    <br />
                    123 Legal Street
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
