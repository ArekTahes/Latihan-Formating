import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  formatSurabayaLocation,
  isValidSurabayaLocation,
  surabayaLocations,
  toServisACLocationSlug,
} from '@/lib/surabayaLocations'
import ServisACLocationContent from './servis-ac-location-content'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return surabayaLocations.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (!isValidSurabayaLocation(slug)) {
    return {
      title: 'Halaman Tidak Ditemukan',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const locationName = formatSurabayaLocation(slug)
  const prettyPath = `/${toServisACLocationSlug(slug)}`

  return {
    title: `Servis AC ${locationName} Surabaya | Teknisi AC Panggilan`,
    description: `Layanan servis AC di ${locationName} Surabaya meliputi cuci AC, isi freon, bongkar pasang, dan perbaikan AC tidak dingin oleh teknisi profesional CV Arsa Prima Solution.`,
    keywords: [
      `servis ac ${slug}`,
      `jasa servis ac ${slug}`,
      `teknisi ac ${slug}`,
      `service ac panggilan ${slug}`,
      `servis ac ${locationName.toLowerCase()} surabaya`,
      'servis ac surabaya',
      'jasa servis ac surabaya',
      'teknisi ac surabaya',
    ],
    alternates: {
      canonical: prettyPath,
    },
    openGraph: {
      title: `Servis AC ${locationName} Surabaya | Teknisi AC Panggilan`,
      description: `Jasa servis AC ${locationName} Surabaya untuk cuci AC, isi freon, dan perbaikan AC tidak dingin dengan teknisi berpengalaman.`,
      url: `https://servisacsurabaya.com${prettyPath}`,
      type: 'website',
      locale: 'id_ID',
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: `teknisi servis ac di ${locationName.toLowerCase()} surabaya memperbaiki ac rumah`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Servis AC ${locationName} Surabaya | Teknisi AC Panggilan`,
      description: `Layanan servis AC ${locationName} Surabaya cepat, rapi, dan bergaransi oleh teknisi CV Arsa Prima Solution.`,
      images: ['/images/og-image.svg'],
    },
  }
}

export default async function ServisACLocationPage({ params }: PageProps) {
  const { slug } = await params

  if (!isValidSurabayaLocation(slug)) {
    notFound()
  }

  return <ServisACLocationContent slug={slug} />
}
