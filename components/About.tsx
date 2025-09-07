'use client'

import { Award, Users, Heart, Star } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-charcoal mb-6">
              Melbourne&apos;s Premier
              <span className="block text-gold-500">Hair Specialists</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Quadro Hair Team, we&apos;re passionate about creating beautiful, personalized hair color 
              that enhances your natural beauty. Our team of expert colorists specializes in the latest 
              techniques and trends.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Located in Brandon Park Shopping Centre, we&apos;ve been transforming hair and boosting 
              confidence for over a decade. Our commitment to excellence and ongoing education ensures 
              you receive the best possible service.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal">Expert Team</h4>
                  <p className="text-sm text-gray-600">Certified color specialists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal">Personalized</h4>
                  <p className="text-sm text-gray-600">Tailored to you</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal">Caring</h4>
                  <p className="text-sm text-gray-600">Hair health first</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal">5-Star Service</h4>
                  <p className="text-sm text-gray-600">Client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/salon-tour.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold-400 text-white p-6 rounded-2xl max-w-xs">
              <p className="text-2xl font-bold mb-1">10+ Years</p>
              <p className="text-sm">of Excellence in Hair Color</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}