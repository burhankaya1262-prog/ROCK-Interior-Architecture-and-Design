import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../lib/projects'

export const metadata = {
  title: 'Projeler — ROCK',
  description: 'ROCK tarafından tamamlanan örnek projeler',
}

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Projeler</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
