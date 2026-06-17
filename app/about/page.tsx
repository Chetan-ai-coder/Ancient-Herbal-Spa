'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection, HoverScale } from '@/components/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Leaf, Award, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Your health and well-being are at the center of everything we do.',
    },
    {
      icon: Leaf,
      title: 'Natural & Organic',
      description: 'We use only the finest natural and organic products for our treatments.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our team is committed to delivering exceptional service every time.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in creating a welcoming sanctuary for all our guests.',
    },
  ]

  const timeline = [
    { year: '2020', event: 'Serenity Spa founded with a vision to redefine wellness' },
    { year: '2022', event: 'Launched our signature holistic wellness program' },
    { year: '2024', event: 'Adapted to serve our community safely during challenging times' },
    { year: '2026', event: 'Launched online booking and gift card system' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar isLoggedIn={false} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">About Serenity</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              For over years, we&apos;ve been dedicated to creating transformative wellness experiences that nurture
              the body, mind, and spirit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">Our Philosophy</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ancient Herbal Spa since 2020 our footprints in Marques Pombal Lisbon Portugal – highly
                qualified female and professional therapists. We have cozy peaceful space with soothing
                aroma for clients to experience moments of relaxation, peace and well-being.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Suppose you are searching for professional body massage therapist services near you.
                In that case, we are here to serve you. Herbal massage Lisboa, offers many massage
                therapies like:
              </p>
              <div className="pt-4 grid grid-cols-2 gap-x-6 gap-y-4">
                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Aroma Therapy
                </p>

                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Deep Tissue Massage
                </p>

                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Treatment Massage
                </p>

                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Foot Massage
                </p>

                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Cupping Therapy
                </p>

                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Stone Massage
                </p>
                <p className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Sound Therapy
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/cards/about-herbal.png"
                  alt="Herbal Massage"
                  fill
                  priority
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <HoverScale key={i}>
                  <AnimatedSection delay={i * 0.1} className="bg-card border border-border p-6 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </AnimatedSection>
                </HoverScale>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Journey</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="flex gap-6 items-start">
                <div className="w-24 flex-shrink-0">
                  <p className="text-2xl font-serif font-bold text-primary">{item.year}</p>
                </div>
                <div className="flex-1 bg-card border border-border p-6 rounded-lg">
                  <p className="text-foreground text-lg">{item.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
