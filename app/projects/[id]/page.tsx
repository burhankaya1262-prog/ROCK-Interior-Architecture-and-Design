import React from 'react'
import Image from 'next/image'
import { getProject } from '../../../lib/projects'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props) {
  const project = getProject(params.id)
  if (!project) return { title: 'Proje bulunamadı' }
  return { title: `${project.title} — ROCK`, description: project.desc }
}

export default function ProjectDetail({ params }: Props) {
  const project = getProject(params.id)
  if (!project) return <div className="p-6">Proje bulunamadı</div>

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="w-full h-64 relative mb-6 rounded overflow-hidden bg-gray-100">
          <Image src={project.image || '/placeholder-1.svg'} alt={project.title} fill sizes="100vw" />
        </div>
        <p className="text-gray-700">{project.content}</p>
      </div>
    </section>
  )
}
