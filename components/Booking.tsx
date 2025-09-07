'use client'

import { Phone, MessageCircle, Clock, Calendar } from 'lucide-react'

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
      <div className="max-width-container section-padding">
        <div className="text-center text-white">
          <h2 className="heading-2 mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Book your appointment today and let our expert team create your perfect look
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:95617822" className="text-2xl font-bold hover:underline">
                9561 7822
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="font-medium">Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Walk-ins Welcome</h3>
              <p>Appointments preferred for color services</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:95617822" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 font-semibold rounded-full hover:bg-cream transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 9561 7822
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gold-600 transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}