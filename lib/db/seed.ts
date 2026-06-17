import { db } from './index'
import { services } from './schema'
import { v4 as uuid } from 'uuid'

export async function seedServices() {
  const serviceData = [
    {
      id: uuid(),
      name: 'Swedish Massage',
      description: 'A classic full-body massage using long, flowing strokes to relieve tension and improve circulation.',
      price: '80.00',
      duration: 60,
      category: 'massage',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Deep Tissue Massage',
      description: 'Intense massage targeting deep muscle layers to release chronic tension and knots.',
      price: '100.00',
      duration: 60,
      category: 'massage',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Hot Stone Therapy',
      description: 'Therapeutic massage using heated stones to ease muscle tension and promote relaxation.',
      price: '110.00',
      duration: 75,
      category: 'massage',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Facial Treatment',
      description: 'Complete facial treatment with cleansing, exfoliation, and moisturizing for radiant skin.',
      price: '75.00',
      duration: 45,
      category: 'facial',
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Anti-Aging Facial',
      description: 'Advanced facial with premium serums and techniques to reduce fine lines and wrinkles.',
      price: '120.00',
      duration: 60,
      category: 'facial',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Aromatherapy Session',
      description: 'Relaxing session combining essential oils, massage, and meditation for holistic wellness.',
      price: '65.00',
      duration: 50,
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1596178065887-cf88eb7ce338?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Yoga & Meditation',
      description: 'Guided yoga and meditation session to improve flexibility, strength, and mental clarity.',
      price: '55.00',
      duration: 60,
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop',
    },
    {
      id: uuid(),
      name: 'Couples Massage',
      description: 'Luxurious massage experience for two in a private, intimate setting.',
      price: '280.00',
      duration: 60,
      category: 'special',
      image: 'https://images.unsplash.com/photo-1516310735335-611b6fbb62e5?w=500&h=400&fit=crop',
    },
  ]

  try {
    // Clear existing services
    const allServices = await db.select().from(services)
    if (allServices.length === 0) {
      // Insert new services
      for (const service of serviceData) {
        await db.insert(services).values(service)
      }
      console.log('Services seeded successfully')
    }
  } catch (error) {
    console.error('Error seeding services:', error)
  }
}
