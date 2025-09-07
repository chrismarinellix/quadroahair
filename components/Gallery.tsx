'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

const galleryItems = [
  { type: 'video', src: '/videos/transformation-1.mp4', thumbnail: '/images/thumb-1.jpg', title: 'Blonde Transformation' },
  { type: 'image', src: '/images/work-1.jpg', title: 'Balayage Perfection' },
  { type: 'video', src: '/videos/transformation-2.mp4', thumbnail: '/images/thumb-2.jpg', title: 'Lived-in Color' },
  { type: 'image', src: '/images/work-2.jpg', title: 'Brunette Dimension' },
  { type: 'video', src: '/videos/transformation-3.mp4', thumbnail: '/images/thumb-3.jpg', title: 'Platinum Dreams' },
  { type: 'image', src: '/images/work-3.jpg', title: 'Natural Highlights' },
  { type: 'video', src: '/videos/transformation-4.mp4', thumbnail: '/images/thumb-4.jpg', title: 'Color Correction' },
  { type: 'image', src: '/images/work-4.jpg', title: 'Sun-kissed Blonde' },
]

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-charcoal mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformations that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => item.type === 'video' && setSelectedVideo(item.src)}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              autoPlay
              controls
              className="w-full rounded-lg"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}