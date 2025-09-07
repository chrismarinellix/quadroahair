'use client'

import { Instagram } from 'lucide-react'

export default function InstagramFeed() {
  const instagramPosts = [
    { id: 1, type: 'video', src: '/videos/insta-1.mp4' },
    { id: 2, type: 'image', src: '/images/insta-2.jpg' },
    { id: 3, type: 'video', src: '/videos/insta-3.mp4' },
    { id: 4, type: 'image', src: '/images/insta-4.jpg' },
    { id: 5, type: 'video', src: '/videos/insta-5.mp4' },
    { id: 6, type: 'image', src: '/images/insta-6.jpg' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-charcoal mb-4">Follow Our Journey</h2>
          <p className="text-lg text-gray-600 mb-6">
            See our latest transformations and hair inspiration
          </p>
          <a
            href="https://instagram.com/quadrohair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold-500 hover:text-gold-600 font-semibold"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @quadrohair
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              {post.type === 'video' ? (
                <video
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                  }}
                >
                  <source src={post.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={post.src}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/quadrohair"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}