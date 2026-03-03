import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import GaleriContent from './GaleriContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Galeri Dokumentasi Pekerjaan Servis AC, Kulkas, Mesin Cuci & Listrik Surabaya Sidoarjo Gresik',
  description: 'Lihat dokumentasi hasil pekerjaan jasa servis AC, service kulkas, mesin cuci & instalasi listrik profesional di Surabaya, Sidoarjo & Gresik oleh CV. Arsa Prima Solution. Bukti kerja nyata teknisi berpengalaman 10+ tahun.',
  path: '/galeri',
  keywords: [
    'galeri servis ac surabaya', 'hasil service ac surabaya',
    'dokumentasi service kulkas surabaya', 'portofolio jasa listrik surabaya',
    'foto hasil servis ac', 'dokumentasi pekerjaan servis ac sidoarjo',
    'galeri service mesin cuci surabaya', 'foto instalasi listrik surabaya',
    'bukti pekerjaan service elektronik surabaya',
    'portofolio servis ac surabaya sidoarjo gresik',
    'hasil kerja tukang ac surabaya', 'galeri service ac profesional',
    'foto servis kulkas surabaya', 'dokumentasi pasang ac surabaya'
  ]
})

export default function GaleriPage() {
  return <GaleriContent />
}
