'use server'

export interface Category {
  id: string
  name: string
  description: string
  image?: string
  buttonText?: string
}

const mockCategories = [
  {
    id: 'western-massage',
    name: 'Western Massage',
    description: 'Experience a full-body massage designed to promote relaxation, using a selection of oils carefully chosen to suit your unique body type. Allow our skilled therapists to help you unwind and enjoy a calming, therapeutic experience.',
    image: 'https://ancientherbalspa.com/wp-content/uploads/2024/03/close-up-masseuse-with-client-scaled-1.jpg', // Replace with your actual assets
    buttonText: 'Book Now',
  },
  {
    id: 'oriental-massage',
    name: 'Oriental Massage',
    description: 'This treatment fuses traditional Oriental techniques with the soothing application of therapeutic oils. The combination of targeted pressure points and oil-based therapy promotes deep relaxation, improved circulation, and overall balance for your body and mind.',
    image: 'https://ancientherbalspa.com/wp-content/uploads/2024/05/herbal-massage-2-scaled.jpg',
    buttonText: 'Book Now',
  },
  {
    id: 'special-massage',
    name: 'Special Massage',
    description: 'This unique therapy utilizes smooth, heated basalt stones placed strategically on the body to provide soothing warmth. The heat helps to relax muscles, reduce tension, and promote improved circulation, offering a deeply calming and therapeutic experience.',
    image: 'https://ancientherbalspa.com/wp-content/uploads/2024/07/aa.webp',
    buttonText: 'Book Now',
  },
]

export async function getCategories() {
  return mockCategories
}

export async function getCategoryById(id: string) {
  return mockCategories.find((c) => c.id === id) || null
}

export async function getAllCategories() {
  return mockCategories
}

