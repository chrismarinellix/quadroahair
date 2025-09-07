import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Quadro Hair Team - Melbourne Hair Specialists',
  description: 'Melbourne Hair Specialists in Blonde, Balayage, lived in colours, and brunettes. Book your appointment today at Brandon Park Shopping Centre.',
  keywords: 'hair salon melbourne, balayage melbourne, blonde specialist, hair color melbourne, quadro hair, brandon park',
  openGraph: {
    title: 'Quadro Hair Team - Melbourne Hair Specialists',
    description: 'Melbourne Hair Specialists in Blonde, Balayage, lived in colours, and brunettes.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}