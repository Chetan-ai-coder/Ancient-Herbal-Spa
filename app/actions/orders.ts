'use server'

const mockOrders = [
  {
    id: '1',
    type: 'Gift Card',
    amount: '100',
    status: 'completed',
    createdAt: new Date('2024-12-01'),
  },
]

export async function getUserOrders() {
  return mockOrders
}

export async function createOrder(data: any) {
  return { success: true, id: Math.random().toString() }
}
