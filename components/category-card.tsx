'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'

interface CategoryCardProps {
  id: string
  name: string
  description: string
  image?: string
  serviceCount?: number
}

export function CategoryCard({
  id,
  name,
  description,
  image,
  serviceCount,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="group"
    >
      <a href={`/categories/${id}`}>
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
          {/* Image Container */}
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

          {/* Content Wrapper */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-1 transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm text-foreground/70 mb-6 line-clamp-2 flex-grow">
              {description}
            </p>

            {/* Footer with Service Count & Interactive Button */}
            <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Layers className="w-4 h-4 text-accent" />
                <span className="font-medium">
                  {serviceCount} {serviceCount === 1 ? 'Service' : 'Services'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-primary font-medium text-sm">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}