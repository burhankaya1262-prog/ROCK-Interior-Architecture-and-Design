import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ROCK — Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
