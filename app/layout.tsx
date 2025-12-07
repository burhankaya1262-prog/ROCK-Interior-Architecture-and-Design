import './globals.css'
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'ROCK - Interior Architecture and Design',
  description: 'Portfolio and studio site',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
