'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { giftCards } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

function generateGiftCardCode() {
  return `GC-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
}

export async function createGiftCard(data: {
  amount: number
  recipientName?: string
  recipientEmail?: string
  expiresAt?: string
}) {
  const userId = await getUserId()

  const id = `giftcard_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  const code = generateGiftCardCode()

  await db.insert(giftCards).values({
    id,
    code,
    amount: data.amount.toString(),
    balance: data.amount.toString(),
    recipientName: data.recipientName,
    recipientEmail: data.recipientEmail,
    purchasedBy: userId,
    expiresAt: data.expiresAt,
  })

  revalidatePath('/gift-cards')
  return { id, code }
}

export async function getUserGiftCards() {
  const userId = await getUserId()
  return db.select().from(giftCards).where(eq(giftCards.purchasedBy, userId))
}

export async function validateGiftCardCode(code: string) {
  const result = await db.select().from(giftCards).where(eq(giftCards.code, code))
  const card = result[0]

  if (!card) return null

  const now = new Date()
  if (card.expiresAt && new Date(card.expiresAt) < now) {
    return null
  }

  return card
}

export async function useGiftCard(giftCardId: string, userId: string, amount: number) {
  const card = await db.select().from(giftCards).where(eq(giftCards.id, giftCardId))

  if (!card[0]) throw new Error('Gift card not found')

  const newBalance = parseFloat(card[0].balance as any) - amount
  if (newBalance < 0) throw new Error('Insufficient balance')

  await db.update(giftCards).set({ balance: newBalance.toString(), usedBy: userId }).where(eq(giftCards.id, giftCardId))

  revalidatePath('/gift-cards')
  return newBalance
}
