'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { AnimatedSection } from '@/components/motion'
import { getServices } from '@/app/actions/services'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

interface Service {
  id: string
  name: string
  description: string
  price: string
  duration: number
  category?: string
  image?: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [filteredServices, setFilteredServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices()
        setServices(data as Service[])
        setFilteredServices(data as Service[])
      } catch (error) {
        console.log('[v0] Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  useEffect(() => {
    let filtered = services

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((s) => s.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, services])

  const categories = ['all', ...new Set(services.map((s) => s.category).filter(Boolean))]

  return (
    <main className="min-h-screen bg-background">
      <Navbar isLoggedIn={false} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our comprehensive range of wellness and spa treatments
            </p>
          </AnimatedSection>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Filters and Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-secondary/50 rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/60">No services found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
