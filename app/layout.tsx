import React from 'react'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/lib/auth'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://slys-chronicles.com'),
  title: "Sly's Analog & Digital Chronicles",
  description: "A Digital Tinkerer with an Analog Soul - Bridging Silicon & Soil, One Bit at a Time. Discord bots, web development, gaming, and farming tech.",
  keywords: ['Discord bots', 'web development', 'gaming', 'farming tech', 'David Campbell', 'Slydog9696'],
  authors: [{ name: 'David Campbell', url: 'https://github.com/Slydog9696' }],
  creator: 'David Campbell',
  publisher: 'DC Global Enterprises, LLC',
  robots: 'index, follow',
  openGraph: {
    title: "Sly's Analog & Digital Chronicles",
    description: "A Digital Tinkerer with an Analog Soul - Bridging Silicon & Soil, One Bit at a Time",
    url: 'https://slys-chronicles.com',
    siteName: "Sly's Analog & Digital Chronicles",
    images: [
      {
        url: '/images/profile-icon.png',
        width: 1200,
        height: 630,
        alt: 'Slydog9696 - Digital Tinkerer with an Analog Soul',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sly's Analog & Digital Chronicles",
    description: "A Digital Tinkerer with an Analog Soul - Bridging Silicon & Soil, One Bit at a Time",
    images: ['/images/profile-icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-neutral-gray via-midnight-blue to-tech-blue font-modern">
        <AuthProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}


