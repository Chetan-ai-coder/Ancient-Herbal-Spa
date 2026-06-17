'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Gift, LogOut, User, DollarSign } from 'lucide-react'

const mockBookings = [
  {
    id: '1',
    serviceId: 'Swedish Massage',
    bookingDate: '2024-12-20',
    startTime: '10:00',
    status: 'confirmed',
    notes: 'First time at spa, looking forward to it!',
  },
  {
    id: '2',
    serviceId: 'Hot Stone Therapy',
    bookingDate: '2024-12-25',
    startTime: '14:00',
    status: 'confirmed',
    notes: 'Holiday treat for myself',
  },
]

const mockOrders = [
  {
    id: '1',
    type: 'Gift Card',
    amount: '100',
    status: 'completed',
    createdAt: '2024-12-01',
  },
  {
    id: '2',
    type: 'Booking Payment',
    amount: '80',
    status: 'completed',
    createdAt: '2024-11-28',
  },
]

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-5xl font-serif font-bold text-foreground mb-2">
                  Welcome, {mockUser.name}!
                </h1>
                <p className="text-lg text-foreground/70">Manage your spa bookings and purchases</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-600 rounded-lg hover:bg-red-500/20 transition-colors font-semibold">
                <LogOut size={20} />
                Sign Out
              </button>
            </div>

            {/* Profile Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User size={32} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">{mockUser.name}</h2>
                  <p className="text-foreground/70">{mockUser.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Calendar,
                label: 'Total Bookings',
                value: mockBookings.length,
                color: 'primary',
              },
              {
                icon: DollarSign,
                label: 'Total Spent',
                value: `₹${mockOrders.reduce((sum, o) => sum + parseFloat(o.amount || 0), 0).toFixed(2)}`,
                color: 'accent',
              },
              {
                icon: Gift,
                label: 'Quick Action',
                value: 'Book Now',
                color: 'primary',
                href: '/booking',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-${stat.color}/10 rounded-lg`}>
                    <stat.icon size={24} className={`text-${stat.color}`} />
                  </div>
                </div>
                {stat.href && (
                  <Link
                    href={stat.href}
                    className="inline-block mt-4 text-sm text-primary hover:underline font-semibold"
                  >
                    Go →
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bookings Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">Your Bookings</h2>
              <Link
                href="/booking"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                New Booking
              </Link>
            </div>

            {mockBookings.length > 0 ? (
              <div className="space-y-4">
                {mockBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{booking.serviceId}</h3>
                        <p className="text-foreground/70">
                          {new Date(booking.bookingDate).toLocaleDateString()} at {booking.startTime}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-700'
                            : booking.status === 'cancelled'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm">{booking.notes}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <Calendar size={48} className="mx-auto text-foreground/30 mb-4" />
                <p className="text-foreground/60 mb-6">No bookings yet. Time to relax!</p>
                <Link
                  href="/booking"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Book an Appointment
                </Link>
              </div>
            )}
          </motion.div>

          {/* Orders Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">Order History</h2>
              <Link
                href="/gift-cards"
                className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Buy Gift Card
              </Link>
            </div>

            {mockOrders.length > 0 ? (
              <div className="space-y-4">
                {mockOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg capitalize">{order.type}</h3>
                        <p className="text-foreground/70">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">₹{order.amount}</p>
                        <p
                          className={`text-sm font-semibold ${
                            order.status === 'completed'
                              ? 'text-green-600'
                              : order.status === 'failed'
                                ? 'text-red-600'
                                : 'text-yellow-600'
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <DollarSign size={48} className="mx-auto text-foreground/30 mb-4" />
                <p className="text-foreground/60 mb-6">No orders yet</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

