import type { Metadata } from "next"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { TableOfContents } from "@/components/table-of-contents"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Home, Info, Phone, ShoppingBag, FileText, Cookie } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | Your Company",
  description: "Learn how we use cookies and similar technologies on our website",
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
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "types-of-cookies", title: "Types of Cookies We Use" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "cookie-management", title: "Managing Your Cookies" },
  { id: "changes", title: "Changes to This Cookie Policy" },
  { id: "contact", title: "Contact Us" },
]

export default function CookiesPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="min-h-screen bg-background bg-animated-gradient">
      <Navbar />
      <FloatingNavbar navItems={navItems} />

      <div className="container px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cookie Policy", href: "/cookies", active: true },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
            </div>

            <AnimatedBackground variant="dots" intensity="light" className="rounded-xl p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <section id="introduction" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-primary" />
                    Introduction
                  </h2>
                  <p>
                    This Cookie Policy explains how Your Company ("we", "our", or "us") uses cookies and similar
                    technologies to recognize you when you visit our website. It explains what these technologies are
                    and why we use them, as well as your rights to control our use of them.
                  </p>
                </section>

                <section id="what-are-cookies" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a
                    website. Cookies are widely used by website owners in order to make their websites work, or to work
                    more efficiently, as well as to provide reporting information.
                  </p>
                  <p>
                    Cookies set by the website owner (in this case, Your Company) are called "first-party cookies".
                    Cookies set by parties other than the website owner are called "third-party cookies". Third-party
                    cookies enable third-party features or functionality to be provided on or through the website (e.g.,
                    advertising, interactive content, and analytics). The parties that set these third-party cookies can
                    recognize your computer both when it visits the website in question and also when it visits certain
                    other websites.
                  </p>
                </section>

                <section id="types-of-cookies" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                  <p>We use the following types of cookies:</p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                    They are usually only set in response to actions made by you which amount to a request for services,
                    such as setting your privacy preferences, logging in, or filling in forms. You can set your browser
                    to block or alert you about these cookies, but some parts of the site will not then work.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Performance Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                    performance of our site. They help us to know which pages are the most and least popular and see how
                    visitors move around the site. All information these cookies collect is aggregated and therefore
                    anonymous. If you do not allow these cookies we will not know when you have visited our site, and
                    will not be able to monitor its performance.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Functionality Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and personalization. They may be
                    set by us or by third-party providers whose services we have added to our pages. If you do not allow
                    these cookies then some or all of these services may not function properly.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Targeting Cookies</h3>
                  <p>
                    These cookies may be set through our site by our advertising partners. They may be used by those
                    companies to build a profile of your interests and show you relevant adverts on other sites. They do
                    not store directly personal information, but are based on uniquely identifying your browser and
                    internet device. If you do not allow these cookies, you will experience less targeted advertising.
                  </p>
                </section>

                <section id="third-party-cookies" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report usage
                    statistics of the website, deliver advertisements on and through the website, and so on.
                  </p>
                  <p>These may include:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <strong>Analytics cookies:</strong> We use Google Analytics to help us understand how our website
                      is being used. These cookies may track things such as how long you spend on the site and the pages
                      that you visit.
                    </li>
                    <li>
                      <strong>Advertising cookies:</strong> These cookies are used to make advertising messages more
                      relevant to you. They perform functions like preventing the same ad from continuously reappearing,
                      ensuring that ads are properly displayed, and in some cases selecting advertisements that are
                      based on your interests.
                    </li>
                    <li>
                      <strong>Social Media cookies:</strong> These cookies are used when you share information using a
                      social media sharing button or engage with our content on or through a social media platform. The
                      social media platform will record that you have done this.
                    </li>
                  </ul>
                </section>

                <section id="cookie-management" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Managing Your Cookies</h2>
                  <p>
                    Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so
                    vary from browser to browser, and from version to version. You can however obtain up-to-date
                    information about blocking and deleting cookies via these links:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Please note that blocking cookies may have a negative impact on the functions of many websites,
                    including our site. Some features of the site may cease to be available to you.
                  </p>
                </section>

                <section id="changes" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Changes to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                    cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit
                    this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p>
                    The date at the top of this Cookie Policy indicates when it was last updated. Changes to this Cookie
                    Policy are effective when they are posted on this page.
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies or other technologies, please contact us at{" "}
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
