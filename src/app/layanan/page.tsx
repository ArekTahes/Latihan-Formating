import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = generatePageSEO({
  title: 'Layanan Jasa Servis AC, Kulkas, Mesin Cuci & Instalasi Listrik Surabaya Sidoarjo Gresik',
  description: 'Daftar lengkap layanan jasa servis AC, service kulkas, mesin cuci, freezer, showcase, chiller & jasa instalasi listrik profesional di Surabaya, Sidoarjo & Gresik. Teknisi berpengalaman 10+ tahun, bergaransi, harga transparan. Hubungi 087865502146.',
  path: '/layanan',
  keywords: [
    'servis ac surabaya', 'service ac surabaya', 'jasa servis ac surabaya',
    'servis ac sidoarjo', 'service ac sidoarjo', 'servis ac gresik', 'service ac gresik',
    'servis kulkas surabaya', 'service kulkas surabaya', 'servis kulkas sidoarjo', 'servis kulkas gresik',
    'servis mesin cuci surabaya', 'service mesin cuci surabaya', 'servis mesin cuci sidoarjo', 'servis mesin cuci gresik',
    'servis freezer surabaya', 'service showcase surabaya', 'service chiller surabaya',
    'instalasi listrik surabaya', 'jasa listrik surabaya', 'tukang listrik surabaya',
    'instalasi listrik sidoarjo', 'instalasi listrik gresik',
    'jasa servis elektronik surabaya', 'service ac panggilan surabaya',
    'cuci ac surabaya', 'isi freon ac surabaya', 'pasang ac surabaya',
    'service elektronik surabaya sidoarjo gresik',
    'service ac murah surabaya', 'service ac bergaransi surabaya',
    'tukang ac surabaya', 'tukang ac sidoarjo', 'tukang ac gresik',
    'daftar layanan servis elektronik surabaya'
  ]
})

export default function LayananPage() {
  return <ServicesPageContent />
}
