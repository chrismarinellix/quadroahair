'use client'

import { Sparkles, Palette, Sun, Moon } from 'lucide-react'

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Blonde Specialists",
    description: "From platinum to honey blonde, our experts create the perfect shade for your skin tone",
    video: "/videos/blonde-service.mp4"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Balayage",
    description: "Hand-painted highlights for a natural, sun-kissed look that grows out beautifully",
    video: "/videos/balayage-service.mp4"
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Lived-in Colours",
    description: "Low-maintenance, effortlessly chic color that looks naturally gorgeous",
    video: "/videos/lived-in-service.mp4"
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Brunettes",
    description: "Rich, dimensional brunette tones from chocolate to caramel",
    video: "/videos/brunette-service.mp4"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-charcoal mb-4">Our Specialties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert hair color services tailored to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold-50 to-white p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="text-gold-500 mb-4 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="heading-3 text-xl mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}