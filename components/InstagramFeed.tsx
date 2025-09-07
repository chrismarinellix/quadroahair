'use client'

import { useEffect } from 'react'
import { Instagram } from 'lucide-react'

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-primary-50/30 to-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-charcoal mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Follow Our Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            See our latest transformations and hair inspiration
          </p>
          <a
            href="https://instagram.com/quadrohairteam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @quadrohairteam
          </a>
        </div>

        {/* Instagram Embed Widget */}
        <div className="flex justify-center mb-8">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/quadrohairteam/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%',
            }}
          />
        </div>

        {/* Alternative Grid Layout for specific posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/p/C1234567890/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
          <div className="aspect-square bg-gradient-to-br from-purple-100 to-accent-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/p/C0987654321/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
          <div className="aspect-square bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/p/C1122334455/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/quadrohairteam"
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