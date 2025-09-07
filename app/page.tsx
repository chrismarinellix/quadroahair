'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Booking from '@/components/Booking'
import Location from '@/components/Location'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Booking />
      <InstagramFeed />
      <Location />
    </div>
  )
}