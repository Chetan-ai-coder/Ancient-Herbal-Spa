'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-block p-4 bg-secondary rounded-full mb-4"
      >
        <Icon size={32} className="text-primary" />
      </motion.div>
      <h3 className="text-lg font-serif font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </motion.div>
  )
}
