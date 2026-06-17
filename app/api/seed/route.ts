import { seedServices } from '@/lib/db/seed'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await seedServices()
    return NextResponse.json({ message: 'Database seeded successfully' })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 })
  }
}
