"use client"

import React from 'react'
import { motion } from 'framer-motion'

// Workaround for framer-motion typing issue in some TS setups
const MotionDiv: any = motion.div

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <MotionDiv
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl p-8 bg-white rounded-lg shadow"
      >
        <h1 className="text-4xl font-bold mb-4">ROCK — Interior Architecture &amp; Design</h1>
        <p className="text-gray-600">Next.js + Tailwind başlangıç şablonu hazır.</p>
      </MotionDiv>
    </main>
  )
}
