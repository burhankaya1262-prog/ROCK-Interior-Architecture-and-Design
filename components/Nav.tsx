"use client"

import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          ROCK
        </Link>
        <div className="space-x-4">
          <Link href="/projects" className="text-gray-600 hover:text-black">Projeler</Link>
          <Link href="/about" className="text-gray-600 hover:text-black">Hakkında</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">İletişim</Link>
        </div>
      </div>
    </nav>
  )
}
