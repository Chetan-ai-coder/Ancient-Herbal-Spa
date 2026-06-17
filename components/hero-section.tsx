'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from './motion'

export function HeroSection() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <AnimatedSection direction="left">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-accent font-serif text-lg tracking-wide"
              >
                Welcome to Serenity
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl font-serif font-bold text-foreground leading-tight text-balance"
              >
                Your Journey to Complete Relaxation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-foreground/70 max-w-md leading-relaxed"
              >
                Immerse yourself in the world of premium spa treatments. From traditional massages to holistic wellness experiences, we craft your perfect escape.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/booking"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/gift-cards"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-semibold"
              >
                Gift Cards
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              <div>
                <p className="text-3xl font-serif font-bold text-primary">15+</p>
                <p className="text-sm text-foreground/70">Services Available</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary">1000+</p>
                <p className="text-sm text-foreground/70">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary">20+</p>
                <p className="text-sm text-foreground/70">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Right Visual */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-8xl opacity-40">🧘</div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
