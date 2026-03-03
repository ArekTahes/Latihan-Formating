import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import KontakContent from './KontakContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Hubungi Kami - Jasa Servis AC & Elektronik Surabaya Sidoarjo Gresik',
  description: 'Hubungi CV. Arsa Prima Solution untuk jasa servis AC, service kulkas, mesin cuci & instalasi listrik di Surabaya, Sidoarjo & Gresik. WhatsApp 087865502146. Respon cepat, buka Senin-Minggu 08.00-17.00!',
  path: '/kontak',
  keywords: [
    'kontak servis ac surabaya', 'nomor tukang ac surabaya',
    'whatsapp service ac surabaya', 'telepon jasa listrik surabaya',
    'hubungi service ac surabaya', 'kontak tukang ac sidoarjo',
    'nomor service ac gresik', 'whatsapp tukang ac surabaya',
    'alamat service ac surabaya', 'lokasi jasa servis ac surabaya',
    'kontak service kulkas surabaya', 'nomor service mesin cuci surabaya',
    'panggil tukang ac surabaya sekarang',
    'hubungi jasa listrik surabaya sidoarjo gresik'
  ]
})

export default function KontakPage() {
  return <KontakContent />
}
