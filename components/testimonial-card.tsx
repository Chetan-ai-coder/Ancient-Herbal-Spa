'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  rating: number
  message: string
  index?: number
}

export function TestimonialCard({ name, rating, message, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg p-6 border border-border"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'}
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-foreground/80 mb-4 italic">"{message}"</p>

      {/* Author */}
      <p className="text-sm font-semibold text-foreground">— {name}</p>
    </motion.div>
  )
}
