"use client"

import React from 'react'

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">İletişim</h1>
        <p className="text-gray-600 mb-6">Bize e-posta yoluyla ulaşın: info@rock.example</p>
        <form
          className="bg-white rounded-lg p-6 shadow space-y-4"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const data = new FormData(form)
            const payload: any = {}
            data.forEach((v, k) => (payload[k] = v))
            await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
            alert('Mesajınız alındı (demo).')
            form.reset()
          }}
        >
          <input name="name" className="w-full border p-3 rounded" placeholder="Adınız" />
          <input name="email" className="w-full border p-3 rounded" placeholder="E-posta" />
          <textarea name="message" className="w-full border p-3 rounded" placeholder="Mesajınız" rows={5} />
          <button className="px-4 py-2 bg-black text-white rounded">Gönder</button>
        </form>
      </div>
    </section>
  )
}
