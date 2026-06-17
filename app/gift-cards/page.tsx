'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection, HoverScale } from '@/components/motion'
import { Gift, Check } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [personalMessage, setPersonalMessage] = useState('')

  const giftAmounts = [40, 60, 65, 200, 300, 500]

  const features = [
    'Valid for 12 months from purchase',
    'Can be used for any service',
    'Digital delivery available',
    'Personalized gift message',
    'No service fees',
    'Fully transferable',
  ]

  const handlePurchase = () => {
    if (!selectedAmount || !recipientName || !recipientEmail) {
      alert('Please fill in all fields')
      return
    }
    // Will integrate Razorpay here
    console.log('Processing gift card purchase:', {
      amount: selectedAmount,
      recipientName,
      recipientEmail,
      message: personalMessage,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar isLoggedIn={false} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Gift className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">Gift Cards</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Give the gift of relaxation. Perfect for any occasion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Gift Card Selection */}
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Select Amount</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {giftAmounts.map((amount) => (
                  <HoverScale key={amount}>
                    <button
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-6 rounded-lg border-2 font-semibold text-lg transition-all ${
                        selectedAmount === amount
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-card text-foreground hover:border-primary'
                      }`}
                    >
                      ${amount}
                    </button>
                  </HoverScale>
                ))}
              </div>

              {/* Features */}
              <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Terms */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-foreground/70">
                <p className="mb-2">
                  <span className="font-semibold text-foreground">Terms & Conditions:</span> Gift cards are non-refundable but can be
                  transferred. They cannot be redeemed for cash.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Purchase Form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Purchase Details</h2>

              <form className="space-y-6">
                {/* Your Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Recipient Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="Who is this gift for?"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Recipient Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Recipient Email</label>
                  <input
                    type="email"
                    placeholder="recipient@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Personal Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Personal Message (Optional)</label>
                  <textarea
                    placeholder="Add a special message..."
                    value={personalMessage}
                    onChange={(e) => setPersonalMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-foreground/70">
                    <span>Gift Card Amount</span>
                    <span className="font-semibold text-foreground">
                      {selectedAmount ? `$${selectedAmount}` : '$0'}
                    </span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Service Fee</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${selectedAmount || 0}</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={handlePurchase}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
                  disabled={!selectedAmount}
                >
                  Proceed to Payment
                </button>

                <p className="text-xs text-foreground/50 text-center">
                  Powered by Razorpay. Your payment is secure and encrypted.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How do I use my gift card?',
                a: 'Recipients can use their gift card when booking any service on our website. The credit will be applied at checkout.',
              },
              {
                q: 'Can I purchase multiple gift cards?',
                a: 'Yes! You can purchase multiple gift cards in a single transaction or separate them for different recipients.',
              },
              {
                q: 'What if the gift card is not used within 12 months?',
                a: 'Gift cards expire after 12 months. We recommend purchasing closer to the intended use date.',
              },
              {
                q: 'Can I get a refund for my gift card?',
                a: 'Gift cards are non-refundable, but they can be transferred to another person if needed.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70 text-sm">{item.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
