'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Massages', href: '/services' },
    { label: 'Book Now', href: '/booking' },
    { label: 'Gift Cards', href: '/gift-cards' },
    { label: 'Blogs', href: 'blog'},
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-bold text-primary"
          >
            <Image
              src="https://ancientherbalspa.com/wp-content/uploads/2024/06/logo-massage-2-WB.svg"
              alt="Ancient Herbal Spa Logo"
              width={100}
              height={100}
              className="w-30 h-30 object-contain" // Tailwind safely handles it now
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
