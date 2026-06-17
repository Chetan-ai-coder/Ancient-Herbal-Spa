'use server'

import Razorpay from 'razorpay'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
})

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function createRazorpayOrder(data: { amount: number; orderId: string; description: string }) {
  await getUserId()

  try {
    const order = await razorpay.orders.create({
      amount: data.amount * 100,
      currency: 'INR',
      receipt: data.orderId,
      description: data.description,
      notes: {
        orderId: data.orderId,
      },
    })

    return order
  } catch (error) {
    console.error('Razorpay error:', error)
    throw error
  }
}

export async function verifyRazorpayPayment(data: {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}) {
  try {
    const crypto = require('crypto')

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
    hmac.update(data.razorpay_order_id + '|' + data.razorpay_payment_id)
    const generated_signature = hmac.digest('hex')

    if (generated_signature === data.razorpay_signature) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    throw error
  }
}
