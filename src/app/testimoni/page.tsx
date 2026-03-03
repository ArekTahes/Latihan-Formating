import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import TestimoniContent from './TestimoniContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Testimoni Pelanggan - Review Jasa Servis AC & Elektronik Surabaya Sidoarjo Gresik',
  description: 'Baca testimoni & ulasan asli pelanggan jasa servis AC, service kulkas, mesin cuci & instalasi listrik di Surabaya, Sidoarjo & Gresik dari CV. Arsa Prima Solution. Rating 4.9/5 dari 150+ pelanggan puas.',
  path: '/testimoni',
  keywords: [
    'review servis ac surabaya', 'testimoni service ac surabaya',
    'ulasan jasa servis kulkas surabaya', 'review tukang ac surabaya',
    'testimoni service mesin cuci surabaya', 'review jasa listrik surabaya',
    'testimoni service ac sidoarjo', 'review servis ac gresik',
    'ulasan pelanggan arsa prima solution',
    'rating service ac surabaya', 'review service elektronik surabaya',
    'testimoni pelanggan service ac terpercaya',
    'review jasa servis ac bergaransi surabaya',
    'pengalaman service ac surabaya'
  ]
})

export default function TestimoniPage() {
  return <TestimoniContent />
}
