import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import services from '@/data/services.json'
import { generateServiceSEO } from '@/lib/seo'
import ServiceDetailContent from './ServiceDetailContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan'
    }
  }

  return generateServiceSEO({
    title: service.title,
    description: service.fullDescription,
    slug: service.slug
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={service} />
}
