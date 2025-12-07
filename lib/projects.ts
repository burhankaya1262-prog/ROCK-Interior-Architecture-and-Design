export type Project = {
  id: string
  title: string
  desc: string
  image?: string
  content?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Villa Renovation',
    desc: 'Kapsamlı iç mekan dönüşümü',
    image: '/placeholder-1.svg',
    content: 'Bu proje, mevcut villanın iç mekanlarında kapsamlı bir dönüşümü içerir.'
  },
  {
    id: '2',
    title: 'Showroom Design',
    desc: 'Fonksiyonel gösterim alanı',
    image: '/placeholder-2.svg',
    content: 'Gösterim alanı için ışıklandırma ve akış odaklı tasarım.'
  },
  {
    id: '3',
    title: 'Office Fit-Out',
    desc: 'Çağdaş ofis düzeni',
    image: '/placeholder-3.svg',
    content: 'Esnek çalışma alanları ve toplantı zonları tasarlandı.'
  }
]

export function getProject(id: string) {
  return projects.find((p) => p.id === id) || null
}
