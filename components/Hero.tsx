'use client'

import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&q=80&w=2074')`,
          filter: 'blur(2px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-primary-900/40 to-black/60" />
      
      <div className="relative z-10 text-center text-white max-width-container section-padding">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary-300" />
          <span className="text-sm font-medium text-primary-100">Melbourne&apos;s Premier Hair Studio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-primary-300 via-purple-300 to-accent-300 bg-clip-text text-transparent">
            Quadro Hair
          </span>
          <span className="block text-3xl md:text-4xl mt-2 text-white/90">Team</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light animate-slide-up animation-delay-200 text-white/90">
          Blonde • Balayage • Lived-in Colours • Brunettes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
          <a href="tel:95617822" className="button-primary">
            Book Appointment
          </a>
          <a href="#services" className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
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