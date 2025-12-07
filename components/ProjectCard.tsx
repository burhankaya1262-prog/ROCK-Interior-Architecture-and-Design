import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '../lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-lg p-4 shadow">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="w-full h-40 relative rounded overflow-hidden mb-3">
          <Image src={project.image || '/placeholder-1.svg'} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <h3 className="font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.desc}</p>
      </Link>
    </article>
  )
}
