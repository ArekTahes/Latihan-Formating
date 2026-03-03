import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema'

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
    default: 'Jasa Servis AC Surabaya | Service AC, Kulkas, Mesin Cuci - CV. Arsa Prima Solution',
    template: '%s | CV. Arsa Prima Solution Surabaya'
  },
  description: 'Jasa servis AC Surabaya, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman, respon cepat, bergaransi. Hubungi 087865502146.',
  keywords: [
    'servis ac surabaya',
    'service ac surabaya',
    'jasa service ac surabaya',
    'jasa servis ac surabaya',
    'servis ac',
    'service ac',
    'tukang ac surabaya',
    'cuci ac surabaya',
    'isi freon ac surabaya',
    'servis kulkas surabaya',
    'service kulkas surabaya',
    'servis mesin cuci surabaya',
    'service mesin cuci surabaya',
    'servis freezer surabaya',
    'service freezer surabaya',
    'servis showcase surabaya',
    'servis chiller surabaya',
    'instalasi listrik surabaya',
    'jasa listrik surabaya',
    'tukang listrik surabaya',
    'jasa service elektronik surabaya',
    'jasa servis elektronik surabaya',
    'service elektronik surabaya',
    'CV Arsa Prima Solution',
    'service ac panggilan surabaya',
    'servis ac panggilan surabaya'
  ],
  authors: [{ name: 'CV. Arsa Prima Solution' }],
  creator: 'CV. Arsa Prima Solution',
  publisher: 'CV. Arsa Prima Solution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arsaprimasolution.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jasa Servis AC Surabaya | Service AC, Kulkas, Mesin Cuci - CV. Arsa Prima Solution',
    description: 'Jasa servis AC Surabaya, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman, bergaransi, harga transparan.',
    url: 'https://arsaprimasolution.com',
    siteName: 'CV. Arsa Prima Solution - Jasa Servis Elektronik Surabaya',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
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
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Geo meta tags for local SEO - Surabaya */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Surabaya" />
        <meta name="geo.position" content="-7.2654;112.72155" />
        <meta name="ICBM" content="-7.2654, 112.72155" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
