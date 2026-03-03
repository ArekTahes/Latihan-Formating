import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Layanan Jasa Servis AC, Kulkas, Mesin Cuci & Instalasi Listrik Surabaya',
  description: 'Daftar lengkap layanan jasa servis AC, service kulkas, mesin cuci, freezer, showcase, chiller & jasa instalasi listrik profesional di Surabaya. Teknisi berpengalaman, bergaransi, harga transparan. Hubungi 087865502146.',
  path: '/layanan',
  keywords: ['servis ac surabaya', 'service ac surabaya', 'servis kulkas surabaya', 'servis mesin cuci surabaya', 'jasa servis elektronik surabaya', 'instalasi listrik surabaya', 'service ac panggilan surabaya']
})

export default function LayananPage() {
  return <ServicesPageContent />
}
