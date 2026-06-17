'use client'

// Mock auth client for development/preview
// In production, integrate with a proper authentication service

export const authClient = {
  signIn: async () => ({ success: false }),
  signUp: async () => ({ success: false }),
  signOut: async () => ({ success: false }),
  useSession: () => ({ data: null, isPending: false }),
}

export const { signIn, signUp, signOut, useSession } = authClient

