'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/motion'
import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Check, ChevronsUpDown } from 'lucide-react'
import { getServices } from '@/app/actions/services'
import { Button } from '@/components/ui/button'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

interface Service {
  id: string
  name: string
  description: string

  minPrice: string
  midPrice: string
  maxPrice: string
  premiumPrice?: string

  minDuration: number
  midDuration: number
  maxDuration: number
  premiumDuration?: number

  image?: string
  category?: string
}

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [bookingDate, setBookingDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [notes, setNotes] = useState('')
  const [message, setMessage] = useState('')
  const [services, setServices] = useState<Service[]>([])
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [peopleCount, setPeopleCount] = useState('1')
  const [couponCode, setCouponCode] = useState('')
  const [agreedToPolicy, setAgreedToPolicy] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)


  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices()
      setServices(data as Service[])
    }

    fetchServices()
  }, [])

  const selectedServiceData = services.find(
    (s) => s.id === selectedService
  )

  const durationOptions = selectedServiceData
    ? [
      {
        duration: selectedServiceData.minDuration,
        price: selectedServiceData.minPrice,
      },
      {
        duration: selectedServiceData.midDuration,
        price: selectedServiceData.midPrice,
      },
      {
        duration: selectedServiceData.maxDuration,
        price: selectedServiceData.maxPrice,
      },
      ...(selectedServiceData.premiumDuration
        ? [
          {
            duration: selectedServiceData.premiumDuration,
            price: selectedServiceData.premiumPrice,
          },
        ]
        : []),
    ]
    : []

  const endTime =
    selectedDuration && startTime
      ? new Date(
        new Date(`2024-01-01 ${startTime}`).getTime() +
        selectedDuration * 60000
      ).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      : ''

  const resetForm = () => {
    setFullName('')
    setEmail('')
    setSelectedService(null)
    setSelectedDuration(null)
    setSelectedPrice(null)
    setBookingDate('')
    setStartTime('')
    setPeopleCount('1')
    setCouponCode('')
    setNotes('')
    setAgreedToPolicy(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !fullName ||
      !email ||
      !selectedService ||
      !selectedDuration ||
      !bookingDate ||
      !startTime ||
      !agreedToPolicy
    ) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email address')
      return
    }

    try {
      setIsSubmitting(true)

      // Web3Forms will go here later

      setMessage('✓ Booking submitted successfully!')

      resetForm()

    } catch (error) {
      setMessage('Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate time slots
  const timeSlots = []

  for (let i = 17; i < 22; i++) {
    timeSlots.push(`${String(i).padStart(2, '0')}:00`)
  }

  // Minimum date is today
  const minDate = new Date().toISOString().split('T')[0]

  return (
    <main className="min-h-screen bg-background">
      <Navbar isLoggedIn={false} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">Book Your Appointment</h1>
            <p className="text-xl text-foreground/70">
              Choose your preferred service, date, and time to reserve your spa experience
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-8 space-y-8"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-4">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-4">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Service + People */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-4">
                    Select Service *
                  </label>

                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <div
                        role="combobox"
                        aria-expanded={open}
                        className="w-full h-14 px-4 rounded-xl border border-border bg-background flex items-center justify-between cursor-pointer"
                      >
                        {selectedService
                          ? (() => {
                            const service = services.find(
                              (s) => s.id === selectedService
                            )

                            return `${service?.name} • From €${service?.minPrice}`
                          })()
                          : 'Select a service...'}

                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                      </div>
                    </PopoverTrigger>

                    <PopoverContent
                      className="w-[var(--radix-popover-trigger-width)] p-0"
                      align="start"
                    >
                      <Command>
                        <CommandInput placeholder="Search service..." />

                        <CommandList className="max-h-56 overflow-y-auto">
                          <CommandEmpty>
                            No service found.
                          </CommandEmpty>

                          <CommandGroup>
                            {services.map((service) => (
                              <CommandItem
                                key={service.id}
                                value={service.name}
                                onSelect={() => {
                                  setSelectedService(service.id)
                                  setSelectedDuration(null)
                                  setSelectedPrice(null)
                                  setOpen(false)
                                }}
                              >
                                {service.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-4">
                    Number of People
                  </label>

                  <select
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                </div>
              </div>

              {/* Duration + Coupon */}
              {selectedServiceData && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-semibold mb-4">
                      Select Duration *
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      {durationOptions.map((option) => (
                        <button
                          key={option.duration}
                          type="button"
                          onClick={() => {
                            setSelectedDuration(option.duration)
                            setSelectedPrice(option.price || null)
                          }}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${selectedDuration === option.duration
                            ? 'border-primary bg-primary/10'
                            : 'border-border'
                            }`}
                        >
                          <h4 className="font-semibold">
                            {option.duration} Min
                          </h4>

                          <p className="text-sm text-foreground/70">
                            €{option.price}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-4">
                      Coupon Code
                    </label>

                    <input
                      type="text"
                      placeholder="Have Coupon Code ?"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Select Date *
                  </label>

                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={minDate}
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Select Time *
                  </label>

                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Choose a time slot</option>

                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-lg font-semibold mb-4">
                  Details & Preferences
                </label>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any preferences or health concerns we should know about?"
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Booking Summary */}
              {selectedServiceData &&
                selectedDuration &&
                selectedPrice && (
                  <div className="bg-secondary/50 rounded-xl p-5 space-y-2">
                    <h4 className="font-semibold text-lg">
                      Booking Summary
                    </h4>

                    <p>
                      <strong>Name:</strong> {fullName || '-'}
                    </p>

                    <p>
                      <strong>Email:</strong> {email || '-'}
                    </p>

                    <p>
                      <strong>Service:</strong>{' '}
                      {selectedServiceData.name}
                    </p>

                    <p>
                      <strong>Duration:</strong>{' '}
                      {selectedDuration} Minutes
                    </p>

                    <p>
                      <strong>Date:</strong> {bookingDate || '-'}
                    </p>

                    <p>
                      <strong>Time:</strong>{' '}
                      {startTime
                        ? `${startTime} - ${endTime}`
                        : '-'}
                    </p>

                    <p>
                      <strong>People:</strong> {peopleCount}
                    </p>

                    {couponCode && (
                      <p>
                        <strong>Coupon:</strong> {couponCode}
                      </p>
                    )}

                    <p>
                      <strong>Price:</strong> €{selectedPrice}
                    </p>
                  </div>
                )}

              {/* Error / Success */}
              {message && (
                <div
                  className={`p-4 rounded-lg ${message.includes('✓')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                >
                  {message}
                </div>
              )}

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreedToPolicy}
                  onChange={(e) =>
                    setAgreedToPolicy(e.target.checked)
                  }
                  className="mt-1 h-4 w-4"
                />

                <label className="text-sm text-foreground/70">
                  I agree to the booking policy and consent to
                  being contacted regarding this appointment.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  !selectedService ||
                  !selectedDuration ||
                  !bookingDate ||
                  !startTime ||
                  isSubmitting
                }
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Easy Booking',
              description: 'Select your preferred service and time in just a few clicks',
            },
            {
              title: 'Flexible Cancellation',
              description: 'Cancel up to 24 hours before for a full refund',
            },
            {
              title: 'Secure Payment',
              description: 'Your information is safe with our secure payment system',
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
