import type { Metadata } from 'next'

const siteConfig = {
  name: 'CV. Arsa Prima Solution',
  description: 'Jasa servis AC Surabaya, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman, bergaransi.',
  url: 'https://arsaprimasolution.com',
  ogImage: '/images/og-image.jpg',
  phone: '087865502146',
  phone2: '087759731023',
  email: 'Hariteknik1976@gmail.com',
  address: 'Surabaya, Jawa Timur',
}

// Keyword mapping per service slug for SEO
const serviceKeywords: { [key: string]: string[] } = {
  'service-ac': [
    'servis ac surabaya', 'service ac surabaya', 'jasa servis ac surabaya', 'jasa service ac', 
    'tukang ac surabaya', 'cuci ac surabaya', 'isi freon ac surabaya', 'service ac panggilan surabaya',
    'perbaikan ac surabaya', 'service ac terdekat surabaya', 'servis ac terdekat', 'biaya service ac surabaya'
  ],
  'service-mesin-cuci': [
    'servis mesin cuci surabaya', 'service mesin cuci surabaya', 'jasa service mesin cuci surabaya',
    'perbaikan mesin cuci surabaya', 'tukang mesin cuci surabaya', 'service mesin cuci panggilan surabaya',
    'servis mesin cuci terdekat', 'biaya service mesin cuci'
  ],
  'service-kulkas': [
    'servis kulkas surabaya', 'service kulkas surabaya', 'jasa service kulkas surabaya',
    'perbaikan kulkas surabaya', 'tukang kulkas surabaya', 'isi freon kulkas surabaya',
    'service kulkas panggilan surabaya', 'servis kulkas terdekat', 'biaya service kulkas'
  ],
  'service-freezer': [
    'servis freezer surabaya', 'service freezer surabaya', 'jasa service freezer surabaya',
    'perbaikan freezer box surabaya', 'service freezer box surabaya', 'servis freezer terdekat'
  ],
  'service-showcase': [
    'servis showcase surabaya', 'service showcase surabaya', 'perbaikan showcase surabaya',
    'service showcase pendingin surabaya', 'service display cooler surabaya'
  ],
  'service-chiller': [
    'servis chiller surabaya', 'service chiller surabaya', 'perbaikan chiller surabaya',
    'maintenance chiller surabaya', 'service chiller industri surabaya'
  ],
  'instalasi-listrik': [
    'jasa instalasi listrik surabaya', 'tukang listrik surabaya', 'jasa listrik surabaya',
    'instalasi listrik rumah surabaya', 'perbaikan listrik surabaya', 'pasang listrik surabaya',
    'jasa kelistrikan surabaya'
  ]
}

// SEO-optimized title templates per service
const serviceSeoTitles: { [key: string]: string } = {
  'service-ac': 'Jasa Servis AC Surabaya - Service AC Panggilan Profesional & Bergaransi',
  'service-mesin-cuci': 'Jasa Servis Mesin Cuci Surabaya - Service Mesin Cuci Panggilan Bergaransi',
  'service-kulkas': 'Jasa Servis Kulkas Surabaya - Service Kulkas Panggilan Profesional Bergaransi',
  'service-freezer': 'Jasa Servis Freezer Box Surabaya - Service Freezer Profesional Bergaransi',
  'service-showcase': 'Jasa Servis Showcase Surabaya - Service Showcase Pendingin Bergaransi',
  'service-chiller': 'Jasa Servis Chiller Surabaya - Service Chiller Industri Profesional',
  'instalasi-listrik': 'Jasa Instalasi Listrik Surabaya - Tukang Listrik Profesional Bergaransi'
}

interface PageSEOProps {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generatePageSEO({
  title,
  description,
  path = '',
  image = siteConfig.ogImage,
  noIndex = false,
  keywords = []
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const fullTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateServiceSEO(service: {
  title: string
  description: string
  slug: string
}): Metadata {
  const seoTitle = serviceSeoTitles[service.slug] || `Jasa ${service.title} Surabaya - Teknisi Profesional Bergaransi`
  const keywords = serviceKeywords[service.slug] || []

  return generatePageSEO({
    title: seoTitle,
    description: `${service.description} Layanan ${service.title.toLowerCase()} profesional di Surabaya dengan teknisi berpengalaman & bergaransi. Harga mulai terjangkau. Hubungi ${siteConfig.phone} sekarang!`,
    path: `/layanan/${service.slug}`,
    keywords,
  })
}

export { siteConfig, serviceKeywords }
