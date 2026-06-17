'use server'

const mockBookings = [
  {
    id: '1',
    serviceId: 'Swedish Massage',
    bookingDate: '2024-12-20',
    startTime: '10:00',
    status: 'confirmed',
    notes: 'First time at spa',
  },
]

export async function getUserBookings() {
  return mockBookings
}

export async function createBooking(data: any) {
  return { success: true, id: Math.random().toString() }
}
