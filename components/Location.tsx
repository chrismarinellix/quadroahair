'use client'

import { MapPin, Clock, Phone, Car } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-2 text-charcoal mb-6">Find Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Conveniently located in Brandon Park Shopping Centre, right next to NAB
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Address</h4>
                  <p className="text-gray-600">
                    Brandon Park Shopping Centre<br />
                    (Next to NAB)<br />
                    Springvale Road & Ferntree Gully Road<br />
                    Mulgrave VIC 3170
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Contact</h4>
                  <p className="text-gray-600">
                    Phone: <a href="tel:95617822" className="text-primary-500 hover:text-primary-600">9561 7822</a><br />
                    Bookings & Enquiries Welcome
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Parking</h4>
                  <p className="text-gray-600">
                    Free parking available at Brandon Park Shopping Centre
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5876894657!2d145.1628!3d-37.9699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61f1234567890%3A0x1234567890abcdef!2sBrandon%20Park%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}