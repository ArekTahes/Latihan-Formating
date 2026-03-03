import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import TentangKamiContent from './TentangKamiContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Tentang CV. Arsa Prima Solution - Jasa Servis AC & Elektronik Surabaya Sidoarjo Gresik Sejak 2014',
  description: 'CV. Arsa Prima Solution adalah penyedia jasa servis AC, service kulkas, mesin cuci, freezer & instalasi listrik profesional di Surabaya, Sidoarjo & Gresik sejak 2014. 5000+ pelanggan puas, teknisi bersertifikat & berpengalaman.',
  path: '/tentang-kami',
  keywords: [
    'CV Arsa Prima Solution', 'tentang arsa prima solution',
    'jasa servis ac surabaya', 'perusahaan service elektronik surabaya',
    'tukang ac surabaya terpercaya', 'jasa service ac terpercaya surabaya',
    'perusahaan jasa servis ac sidoarjo', 'jasa servis elektronik gresik',
    'service ac profesional surabaya', 'teknisi ac berpengalaman surabaya',
    'jasa perbaikan elektronik surabaya sejak 2014',
    'service ac bergaransi surabaya sidoarjo gresik',
    'profil perusahaan servis ac surabaya',
    'bengkel elektronik terpercaya surabaya'
  ]
})

export default function TentangKamiPage() {
  return <TentangKamiContent />
}
