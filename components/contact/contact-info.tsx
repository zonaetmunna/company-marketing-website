"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Address</h3>
              <address className="not-italic text-muted-foreground">
                123 Innovation Drive
                <br />
                Suite 400
                <br />
                San Francisco, CA 94103
              </address>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+14155550123" className="hover:text-primary">
                  +1 (415) 555-0123
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@yourcompany.com" className="hover:text-primary">
                  info@yourcompany.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
