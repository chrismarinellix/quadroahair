'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import InstagramFeed from '@/components/InstagramFeed'
import Location from '@/components/Location'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Booking />
      <InstagramFeed />
      <Location />
    </div>
  )
}