import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import TestimoniContent from './TestimoniContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Testimoni Pelanggan - Review Jasa Servis AC & Elektronik Surabaya',
  description: 'Baca testimoni & ulasan asli pelanggan jasa servis AC, service kulkas, mesin cuci & instalasi listrik Surabaya dari CV. Arsa Prima Solution. Rating 4.9/5 dari 150+ pelanggan puas.',
  path: '/testimoni',
  keywords: ['review servis ac surabaya', 'testimoni service ac', 'ulasan jasa servis kulkas surabaya', 'review tukang ac surabaya']
})

export default function TestimoniPage() {
  return <TestimoniContent />
}
