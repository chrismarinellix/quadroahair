'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/salon-hero.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      
      <button
        onClick={toggleMute}
        className="absolute top-24 right-4 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all"
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
      </button>

      <div className="relative z-10 text-center text-white max-width-container section-padding">
        <h1 className="heading-1 mb-4 animate-fade-in">
          Melbourne Hair
          <span className="block text-gold-400">Specialists</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-slide-up animation-delay-200">
          Blonde • Balayage • Lived-in Colours • Brunettes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
          <a href="tel:95617822" className="button-primary">
            Book Appointment
          </a>
          <a href="#services" className="button-secondary bg-white/10 backdrop-blur-sm">
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  )
}