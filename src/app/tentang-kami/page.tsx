import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import TentangKamiContent from './TentangKamiContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Tentang CV. Arsa Prima Solution - Jasa Servis AC & Elektronik Surabaya Sejak 2014',
  description: 'CV. Arsa Prima Solution adalah penyedia jasa servis AC, service kulkas, mesin cuci, freezer & instalasi listrik profesional di Surabaya sejak 2014. 150+ pelanggan puas, teknisi bersertifikat.',
  path: '/tentang-kami',
  keywords: ['CV Arsa Prima Solution', 'jasa servis ac surabaya', 'perusahaan service elektronik surabaya', 'tukang ac surabaya terpercaya']
})

export default function TentangKamiPage() {
  return <TentangKamiContent />
}
