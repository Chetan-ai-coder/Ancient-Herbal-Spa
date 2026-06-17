// Mock auth for development/preview
// In production, integrate with a proper authentication service

export const auth = {
  baseURL: process.env.VERCEL_URL || process.env.V0_RUNTIME_URL || 'http://localhost:3000',
}



