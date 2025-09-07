'use client'

import { Instagram, Award, Scissors, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dom',
    role: 'Master Stylist & Owner',
    specialties: ['Balayage Expert', 'Color Correction', 'Men\'s Cuts'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&q=80',
    instagram: '@dom_quadro'
  },
  {
    name: 'Sarah',
    role: 'Senior Colorist',
    specialties: ['Blonde Specialist', 'Lived-in Color', 'Fashion Colors'],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&w=400&q=80',
    instagram: '@sarah_quadro'
  },
  {
    name: 'Jessica',
    role: 'Color Specialist',
    specialties: ['Brunettes', 'Highlights', 'Glossing'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=400&q=80',
    instagram: '@jess_quadro'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-charcoal mb-4">
            Meet Our
            <span className="block bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to making you look and feel your best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-primary-50 to-accent-50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                
                <div className="space-y-2 mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-3 h-3 text-primary-400 mr-2" />
                      {specialty}
                    </div>
                  ))}
                </div>
                
                <a
                  href={`https://instagram.com/${member.instagram.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  {member.instagram}
                </a>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                {index === 0 ? (
                  <Award className="w-5 h-5 text-primary-500" />
                ) : (
                  <Scissors className="w-5 h-5 text-primary-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}