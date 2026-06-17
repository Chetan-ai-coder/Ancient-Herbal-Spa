'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold mb-2">Serenity</h3>
            <p className="text-primary-foreground/80 text-sm">
              Where wellness meets tranquility. Experience the ultimate spa journey.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary-foreground transition">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="hover:text-primary-foreground transition">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 5:00 PM</li>
              <li className="pt-2">Closed on Holidays</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@serenity.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Wellness St, Relax City</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="border-t border-primary-foreground/20 pt-10 pb-10">

          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">
              Visit Us
            </h4>

            <span className="text-sm text-primary-foreground/60">
              Find us on Google Maps
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary-foreground/20 h-[280px]">
            <iframe
              title="Spa Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13504.18196114616!2d-9.145041!3d38.726795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339d8e25230b%3A0xc31700ca8667f843!2sRua%20do%20Conde%20de%20Redondo%2044%2C%201150-103%20Lisboa%2C%20Portugal!5e1!3m2!1sen!2sus!4v1781640892927!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 py-8 border-t border-primary-foreground/20">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="hover:text-primary-foreground/80 transition"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="hover:text-primary-foreground/80 transition"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/60 py-4">
          <p>&copy; 2026 Serenity Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
