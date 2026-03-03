import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import GaleriContent from './GaleriContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Galeri Dokumentasi Pekerjaan Servis AC, Kulkas & Listrik Surabaya',
  description: 'Lihat dokumentasi hasil pekerjaan jasa servis AC, service kulkas, mesin cuci & instalasi listrik profesional di Surabaya oleh CV. Arsa Prima Solution. Bukti kerja nyata teknisi berpengalaman.',
  path: '/galeri',
  keywords: ['galeri servis ac surabaya', 'hasil service ac', 'dokumentasi service kulkas', 'portofolio jasa listrik surabaya']
})

export default function GaleriPage() {
  return <GaleriContent />
}
