'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Instagram } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-width-container section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
              QUADRO
            </h1>
            <span className="ml-2 text-sm text-gold-500 font-medium">Hair Team</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-charcoal hover:text-gold-500 transition-colors">Services</a>
            <a href="#about" className="text-charcoal hover:text-gold-500 transition-colors">About</a>
            <a href="#gallery" className="text-charcoal hover:text-gold-500 transition-colors">Gallery</a>
            <a href="#location" className="text-charcoal hover:text-gold-500 transition-colors">Location</a>
            <a href="tel:95617822" className="button-primary">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-up">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#services" className="text-charcoal hover:text-gold-500 transition-colors">Services</a>
              <a href="#about" className="text-charcoal hover:text-gold-500 transition-colors">About</a>
              <a href="#gallery" className="text-charcoal hover:text-gold-500 transition-colors">Gallery</a>
              <a href="#location" className="text-charcoal hover:text-gold-500 transition-colors">Location</a>
              <a href="tel:95617822" className="button-primary justify-center">
                <Phone className="w-4 h-4 mr-2" />
                9561 7822
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}