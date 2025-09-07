'use client'

import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-width-container section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              QUADRO
              <span className="text-gold-400 text-sm ml-2">Hair Team</span>
            </h3>
            <p className="text-gray-400">
              Melbourne&apos;s specialists in blonde, balayage, and lived-in colors
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-gold-400 transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:95617822" className="hover:text-gold-400 transition-colors">9561 7822</a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Brandon Park Shopping Centre<br />(Next to NAB)</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Sat 9:00-6:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/quadrohair"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/quadrohair"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              @quadrohair
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Quadro Hair Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}