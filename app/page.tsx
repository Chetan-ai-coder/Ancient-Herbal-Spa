'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { FeatureCard } from '@/components/feature-card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Heart, Sparkles, Leaf, Clock, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAllServices } from '@/app/actions/services'
import { getApprovedTestimonials } from '@/app/actions/testimonials'
import Image from 'next/image'
import { CategoryCard } from '@/components/category-card'
import { getCategories } from '@/app/actions/categories'

interface Service {
  id: string
  name: string
  description: string
  price: string
  duration: number
  category?: string
  image?: string
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesData, categoriesData, testimonialsData] = await Promise.all([
          getAllServices(),
          getCategories(),
          getApprovedTestimonials(),
        ])
        setServices(servicesData.slice(0, 3))
        setCategories(categoriesData.slice(0, 3))
        setTestimonials(testimonialsData.slice(0, 3))
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const features = [
    {
      icon: Award,
      title: 'Expert Therapists',
      description: 'Certified specialists with 5+ years of experience',
    },
    {
      icon: Leaf,
      title: 'Premium Products',
      description: 'Organic and natural wellness products',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Custom treatments for your wellness needs',
    },
    {
      icon: Sparkles,
      title: 'Luxury Ambiance',
      description: 'Serene spaces designed for relaxation',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
              Feels Reborn
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
              Welcome to Ancient Herbal Spa By Herbal Massage Lisboa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              Book an Appointment
            </Link>
            <Link
              href="/gift-cards"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold text-lg"
            >
              Gift Cards
            </Link>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 rounded-lg overflow-hidden border border-border"
          >
            <div className="relative h-150 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1570174006382-148305ce4972?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ancient Herbal Spa Hero Image"
                fill
                priority
                className="object-cover"
                sizes='100vw'
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose Ancient Herbal Spa
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover what sets us apart in the world of wellness and relaxation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                The Best Of our categories
              </h2>
              <p className="text-lg text-foreground/70">
                Discover the ultimate relaxation and rejuvenation with our signature herbal massage treatments.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-block text-primary font-semibold hover:underline"
            >
              View All →
            </Link>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse border border-border" />
              ))}
            </div>
          ) : services.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    {...category}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/services"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Explore All Services
                </Link>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60">Services coming soon. Check back later!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Featured Services
              </h2>
              <p className="text-lg text-foreground/70">
                Handpicked treatments for ultimate wellness
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-block text-primary font-semibold hover:underline"
            >
              View All →
            </Link>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse border border-border" />
              ))}
            </div>
          ) : services.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    price={typeof service.price === 'string' ? parseFloat(service.price) : service.price}
                    index={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/services"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Explore All Treatments
                </Link>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60">Services coming soon. Check back later!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-foreground/70">
              Hear from our satisfied guests
            </p>
          </motion.div>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  message={testimonial.message}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60">
                Be the first to share your spa experience with us!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                The Perfect Gift
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Share the gift of relaxation with our beautifully designed gift cards. Perfect for any occasion.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Flexible amounts to suit any budget',
                  'Valid for any service at our spa',
                  'No expiration date',
                  'Instant digital delivery option',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/gift-cards"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Shop Gift Cards
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-80 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg flex items-center justify-center border border-primary/20"
            >
              <div className="text-center">
                <Image
                  src="/cards/Traditional Massage Gift Card.png"
                  alt="Gift Card"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, value: '2000+', label: 'Happy Clients' },
              { icon: Award, value: '5+', label: 'Years Experience' },
              { icon: Clock, value: '20,000+', label: 'Hours of Service' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon size={40} className="mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join thousands of guests who have discovered their path to relaxation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Book Your Spa Day
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
