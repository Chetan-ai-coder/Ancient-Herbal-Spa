'use server'

const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    message: 'Best spa experience ever! The therapists are incredibly skilled and the ambiance is so calming.',
    rating: 5,
    approved: true,
    createdAt: new Date('2024-11-01'),
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    message: 'I came in stressed and left completely relaxed. Highly recommend Serenity Spa!',
    rating: 5,
    approved: true,
    createdAt: new Date('2024-11-15'),
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma@example.com',
    message: 'The attention to detail is amazing. Every treatment is customized perfectly.',
    rating: 5,
    approved: true,
    createdAt: new Date('2024-11-20'),
  },
]

export async function submitTestimonial(data: {
  name: string
  email: string
  rating: number
  message: string
}) {
  // In production, save to database
  return { success: true, id: Math.random().toString() }
}

export async function getApprovedTestimonials() {
  return mockTestimonials
}
