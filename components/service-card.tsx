'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, DollarSign, Euro } from 'lucide-react'

interface ServiceCardProps {
  id: string
  name: string
  description: string

  minPrice: string
  midPrice: string
  maxPrice: string

  premiumPrice?: string

  minDuration: number
  midDuration: number
  maxDuration: number

  premiumDuration?: number

  image: string
  category?: string
}

export function ServiceCard({
  id,
  name,
  description,
  minPrice,
  midPrice,
  maxPrice,
  premiumPrice,
  minDuration,
  midDuration,
  maxDuration,
  premiumDuration,
  image,
  category,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="group"
    >
      <Link href={`/services/${id}`}>
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="h-48 bg-secondary overflow-hidden relative">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-6xl opacity-20">✨</div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {category && (
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {category}
              </span>
            )}
            <h3 className="text-xl font-serif font-bold text-foreground mt-2 mb-2 line-clamp-2">
              {name}
            </h3>
            <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
              {description}
            </p>

            {/* Footer */}
            {/* Minimum Duration & Prices Section */}
            <div className="flex justify-between items-end pt-4 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span>{minDuration} min</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary font-serif font-bold text-lg">
                  <Euro className="w-4 h-4" />
                  <span>{minPrice}</span>
                </div>
              </div>
            </div>

            {/* Medium Duration & Prices Section */}
            <div className="flex justify-between items-end pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span>{midDuration} min</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary font-serif font-bold text-lg">
                  <Euro className="w-4 h-4" />
                  <span>{midPrice}</span>
                </div>
              </div>
            </div>

            {/* Maximum Duration & Prices Section */}
            <div className="flex justify-between items-end pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span>{maxDuration} min</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary font-serif font-bold text-lg">
                  <Euro className="w-4 h-4" />
                  <span>{maxPrice}</span>
                </div>
              </div>
            </div>

            {/* Premium Duration & Prices Section */}
            {premiumPrice && premiumDuration && (
              <div className="flex justify-between items-end pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Clock className="w-4 h-4" />
                    <span>{premiumDuration} min</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary font-serif font-bold text-lg">
                    <Euro className="w-4 h-4" />
                    <span>{premiumPrice}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
