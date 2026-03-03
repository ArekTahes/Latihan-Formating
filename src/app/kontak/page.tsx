import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import KontakContent from './KontakContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Hubungi Kami - Jasa Servis AC & Elektronik Surabaya',
  description: 'Hubungi CV. Arsa Prima Solution untuk jasa servis AC, service kulkas, mesin cuci & instalasi listrik di Surabaya. WhatsApp 087865502146. Respon cepat, teknisi datang hari ini!',
  path: '/kontak',
  keywords: ['kontak servis ac surabaya', 'nomor tukang ac surabaya', 'whatsapp service ac surabaya', 'telepon jasa listrik surabaya']
})

export default function KontakPage() {
  return <KontakContent />
}
