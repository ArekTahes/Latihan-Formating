import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema'
import { FloatingWhatsAppButton } from '@/components/whatsapp/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0ea5e9',
}

export const metadata: Metadata = {
  title: {
    default: 'Jasa Servis AC Surabaya Sidoarjo Gresik | Service AC, Kulkas, Mesin Cuci & Instalasi Listrik - CV. Arsa Prima Solution',
    template: '%s | CV. Arsa Prima Solution Surabaya'
  },
  description: 'Jasa servis AC Surabaya, Sidoarjo & Gresik. Service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman 10+ tahun, bergaransi, harga murah. Hubungi 087865502146.',
  keywords: [
    // === SERVIS AC ===
    'servis ac surabaya', 'service ac surabaya', 'jasa servis ac surabaya', 'jasa service ac surabaya',
    'tukang ac surabaya', 'cuci ac surabaya', 'isi freon ac surabaya', 'service ac panggilan surabaya',
    'perbaikan ac surabaya', 'service ac terdekat surabaya', 'servis ac terdekat',
    'biaya service ac surabaya', 'harga service ac surabaya', 'service ac murah surabaya',
    'service ac bergaransi surabaya', 'service ac terpercaya surabaya',
    'service ac tidak dingin surabaya', 'ac tidak dingin surabaya',
    'ac bocor surabaya', 'ac berisik surabaya', 'ac mati total surabaya',
    'ganti freon ac surabaya', 'tambah freon ac surabaya', 'ganti kompresor ac surabaya',
    'service ac split surabaya', 'service ac standing floor surabaya',
    'service ac cassette surabaya', 'service ac inverter surabaya',
    'pasang ac baru surabaya', 'bongkar pasang ac surabaya', 'pindah ac surabaya',
    'service ac daikin surabaya', 'service ac panasonic surabaya', 'service ac lg surabaya',
    'service ac samsung surabaya', 'service ac sharp surabaya', 'service ac gree surabaya',
    'service ac kantor surabaya', 'service ac ruko surabaya',
    'service ac 24 jam surabaya', 'service ac hari ini surabaya',
    // === SERVIS AC SIDOARJO ===
    'servis ac sidoarjo', 'service ac sidoarjo', 'jasa servis ac sidoarjo',
    'tukang ac sidoarjo', 'cuci ac sidoarjo', 'isi freon ac sidoarjo',
    'service ac panggilan sidoarjo', 'service ac murah sidoarjo',
    'service ac terdekat sidoarjo', 'pasang ac sidoarjo',
    // === SERVIS AC GRESIK ===
    'servis ac gresik', 'service ac gresik', 'jasa servis ac gresik',
    'tukang ac gresik', 'cuci ac gresik', 'isi freon ac gresik',
    'service ac panggilan gresik', 'service ac murah gresik',
    'service ac terdekat gresik', 'pasang ac gresik',
    // === SERVIS KULKAS ===
    'servis kulkas surabaya', 'service kulkas surabaya', 'jasa service kulkas surabaya',
    'perbaikan kulkas surabaya', 'tukang kulkas surabaya', 'isi freon kulkas surabaya',
    'service kulkas panggilan surabaya', 'servis kulkas terdekat', 'biaya service kulkas surabaya',
    'harga service kulkas surabaya', 'service kulkas murah surabaya',
    'kulkas tidak dingin surabaya', 'ganti kompresor kulkas surabaya',
    'service kulkas 1 pintu surabaya', 'service kulkas 2 pintu surabaya',
    'service kulkas side by side surabaya', 'service kulkas inverter surabaya',
    'service kulkas samsung surabaya', 'service kulkas lg surabaya', 'service kulkas sharp surabaya',
    'servis kulkas sidoarjo', 'service kulkas sidoarjo', 'service kulkas gresik', 'servis kulkas gresik',
    // === SERVIS MESIN CUCI ===
    'servis mesin cuci surabaya', 'service mesin cuci surabaya', 'jasa service mesin cuci surabaya',
    'perbaikan mesin cuci surabaya', 'tukang mesin cuci surabaya',
    'service mesin cuci panggilan surabaya', 'servis mesin cuci terdekat',
    'biaya service mesin cuci surabaya', 'harga service mesin cuci surabaya',
    'service mesin cuci murah surabaya', 'mesin cuci tidak mau berputar surabaya',
    'mesin cuci error surabaya', 'ganti bearing mesin cuci surabaya',
    'service mesin cuci top loading surabaya', 'service mesin cuci front loading surabaya',
    'service mesin cuci samsung surabaya', 'service mesin cuci lg surabaya',
    'servis mesin cuci sidoarjo', 'service mesin cuci sidoarjo',
    'servis mesin cuci gresik', 'service mesin cuci gresik',
    // === SERVIS FREEZER ===
    'servis freezer surabaya', 'service freezer surabaya', 'service freezer box surabaya',
    'perbaikan freezer surabaya', 'service freezer sidoarjo', 'service freezer gresik',
    // === SERVIS SHOWCASE ===
    'servis showcase surabaya', 'service showcase surabaya', 'service display cooler surabaya',
    'service showcase sidoarjo', 'service showcase gresik',
    // === SERVIS CHILLER ===
    'servis chiller surabaya', 'service chiller surabaya', 'service chiller industri surabaya',
    'service chiller sidoarjo', 'service chiller gresik',
    // === INSTALASI LISTRIK ===
    'jasa instalasi listrik surabaya', 'tukang listrik surabaya', 'jasa listrik surabaya',
    'instalasi listrik rumah surabaya', 'perbaikan listrik surabaya', 'pasang listrik surabaya',
    'jasa kelistrikan surabaya', 'harga jasa instalasi listrik surabaya',
    'tukang listrik murah surabaya', 'tukang listrik panggilan surabaya',
    'listrik konslet surabaya', 'perbaikan korsleting surabaya',
    'pasang mcb surabaya', 'pasang panel listrik surabaya', 'tambah daya listrik surabaya',
    'instalasi listrik kantor surabaya', 'instalasi listrik ruko surabaya',
    'tukang listrik sidoarjo', 'jasa listrik sidoarjo', 'instalasi listrik sidoarjo',
    'tukang listrik gresik', 'jasa listrik gresik', 'instalasi listrik gresik',
    // === GENERAL ===
    'jasa service elektronik surabaya', 'jasa servis elektronik surabaya',
    'service elektronik surabaya', 'CV Arsa Prima Solution',
    'service ac panggilan surabaya', 'servis ac panggilan surabaya',
    'jasa service elektronik sidoarjo', 'jasa service elektronik gresik',
    'service elektronik terdekat', 'tukang elektronik surabaya',
    'jasa perbaikan elektronik surabaya sidoarjo gresik'
  ],
  authors: [{ name: 'CV. Arsa Prima Solution' }],
  creator: 'CV. Arsa Prima Solution',
  publisher: 'CV. Arsa Prima Solution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://servisacsurabaya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jasa Servis AC Surabaya | Service AC, Kulkas, Mesin Cuci - CV. Arsa Prima Solution',
    description: 'Jasa servis AC Surabaya, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman, bergaransi, harga transparan.',
    url: 'https://servisacsurabaya.com',
    siteName: 'CV. Arsa Prima Solution - Jasa Servis Elektronik Surabaya',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CV. Arsa Prima Solution - Jasa Service Elektronik Surabaya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV. Arsa Prima Solution - Jasa Service Elektronik Surabaya',
    description: 'Jasa service AC, mesin cuci, kulkas, freezer, showcase, chiller dan instalasi listrik profesional di Surabaya.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = generateLocalBusinessSchema()
  const webSiteSchema = generateWebSiteSchema()
  
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        {/* Geo meta tags for local SEO - Surabaya */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Surabaya" />
        <meta name="geo.position" content="-7.2654;112.72155" />
        <meta name="ICBM" content="-7.2654, 112.72155" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
