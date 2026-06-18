'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface NavbarProps {
  isLoggedIn?: boolean
  userName?: string
}

export function Navbar({ isLoggedIn = false, userName = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Massages', href: '/services' },
    { label: 'Book Now', href: '/booking' },
    { label: 'Gift Cards', href: '/gift-cards' },
    { label: 'Blogs', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
       
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
