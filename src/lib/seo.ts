import type { Metadata } from 'next'

const siteConfig = {
  name: 'CV. Arsa Prima Solution',
  description: 'Jasa servis AC Surabaya Sidoarjo Gresik, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman, bergaransi, harga murah.',
  url: 'https://servisacsurabaya.com',
  ogImage: '/images/og-image.svg',
  phone: '087865502146',
  phone2: '087759731023',
  email: 'Hariteknik1976@gmail.com',
  address: 'Surabaya, Jawa Timur',
}

// Area variants for geo-targeted keywords
const serviceAreas = ['surabaya', 'sidoarjo', 'gresik']
const surabayaDistricts = [
  'surabaya pusat', 'surabaya timur', 'surabaya barat', 'surabaya utara', 'surabaya selatan',
  'rungkut', 'wonokromo', 'gubeng', 'tambaksari', 'kenjeran', 'semampir', 'sawahan',
  'tegalsari', 'genteng', 'bubutan', 'krembangan', 'pabean cantikan', 'simokerto',
  'wiyung', 'karangpilang', 'jambangan', 'gayungan', 'wonocolo', 'tenggilis mejoyo',
  'gunung anyar', 'mulyorejo', 'sukolilo', 'dukuh pakis', 'sukomanunggal', 'tandes',
  'benowo', 'lakarsantri', 'sambikerep', 'asemrowo', 'pakal', 'bulak'
]

// Helper: generate area-expanded keywords
function expandKeywordsWithAreas(baseKeywords: string[]): string[] {
  const expanded: string[] = [...baseKeywords]
  baseKeywords.forEach(kw => {
    serviceAreas.forEach(area => {
      if (!kw.includes(area)) {
        expanded.push(kw.replace(/surabaya/g, area))
      }
    })
  })
  return [...new Set(expanded)]
}

// Keyword mapping per service slug for SEO — massive coverage
const serviceKeywords: { [key: string]: string[] } = {
  'service-ac': expandKeywordsWithAreas([
    // Primary keywords
    'servis ac surabaya', 'service ac surabaya', 'jasa servis ac surabaya', 'jasa service ac surabaya',
    'tukang ac surabaya', 'cuci ac surabaya', 'isi freon ac surabaya', 'service ac panggilan surabaya',
    'perbaikan ac surabaya', 'service ac terdekat surabaya', 'servis ac terdekat', 'biaya service ac surabaya',
    // Long-tail & intent keywords
    'harga service ac surabaya', 'biaya cuci ac surabaya', 'biaya isi freon ac surabaya',
    'service ac murah surabaya', 'servis ac murah surabaya', 'service ac bergaransi surabaya',
    'service ac panggilan terdekat surabaya', 'jasa cuci ac panggilan surabaya',
    'service ac tidak dingin surabaya', 'ac tidak dingin surabaya', 'perbaikan ac tidak dingin',
    'ac bocor surabaya', 'service ac bocor surabaya', 'ac berisik surabaya',
    'ac mati total surabaya', 'service ac mati surabaya',
    'ganti freon ac surabaya', 'tambah freon ac surabaya', 'harga freon ac surabaya',
    'ganti kompresor ac surabaya', 'harga ganti kompresor ac',
    'ganti kapasitor ac surabaya', 'service pcb ac surabaya', 'ganti pcb ac surabaya',
    'service remote ac surabaya', 'ganti remote ac surabaya',
    // Type-specific
    'service ac split surabaya', 'servis ac split surabaya', 'cuci ac split surabaya',
    'service ac standing floor surabaya', 'service ac floor standing surabaya',
    'service ac cassette surabaya', 'service ac central surabaya',
    'service ac inverter surabaya', 'service ac non inverter surabaya',
    'service ac 1 pk surabaya', 'service ac 1.5 pk surabaya', 'service ac 2 pk surabaya',
    // Installation
    'pasang ac surabaya', 'pasang ac baru surabaya', 'jasa pasang ac surabaya',
    'bongkar pasang ac surabaya', 'pindah ac surabaya', 'relokasi ac surabaya',
    'instalasi ac surabaya', 'biaya pasang ac surabaya', 'harga pasang ac baru surabaya',
    // Brands
    'service ac daikin surabaya', 'service ac panasonic surabaya', 'service ac lg surabaya',
    'service ac samsung surabaya', 'service ac sharp surabaya', 'service ac gree surabaya',
    'service ac midea surabaya', 'service ac changhong surabaya', 'service ac polytron surabaya',
    'service ac aqua surabaya', 'service ac tcl surabaya', 'service ac haier surabaya',
    // Commercial
    'service ac kantor surabaya', 'service ac ruko surabaya', 'service ac toko surabaya',
    'service ac gudang surabaya', 'service ac pabrik surabaya', 'service ac restoran surabaya',
    'maintenance ac gedung surabaya', 'kontrak service ac surabaya',
    // Trust signals
    'service ac terpercaya surabaya', 'tukang ac terpercaya surabaya',
    'service ac profesional surabaya', 'teknisi ac berpengalaman surabaya',
    'service ac 24 jam surabaya', 'service ac hari minggu surabaya',
    'service ac hari ini surabaya', 'service ac cepat surabaya',
    // Nearby / terdekat
    'service ac dekat sini', 'tukang ac terdekat', 'service ac terdekat dari lokasi saya'
  ]),
  'service-mesin-cuci': expandKeywordsWithAreas([
    // Primary
    'servis mesin cuci surabaya', 'service mesin cuci surabaya', 'jasa service mesin cuci surabaya',
    'perbaikan mesin cuci surabaya', 'tukang mesin cuci surabaya', 'service mesin cuci panggilan surabaya',
    'servis mesin cuci terdekat', 'biaya service mesin cuci surabaya',
    // Long-tail
    'harga service mesin cuci surabaya', 'service mesin cuci murah surabaya',
    'service mesin cuci bergaransi surabaya', 'jasa servis mesin cuci panggilan surabaya',
    'mesin cuci tidak mau berputar surabaya', 'mesin cuci tidak bisa buang air surabaya',
    'mesin cuci error surabaya', 'mesin cuci mati total surabaya',
    'mesin cuci bunyi berisik surabaya', 'mesin cuci bocor surabaya',
    'mesin cuci tidak bisa peras surabaya', 'mesin cuci goyang keras surabaya',
    // Type-specific
    'service mesin cuci top loading surabaya', 'service mesin cuci front loading surabaya',
    'service mesin cuci 2 tabung surabaya', 'service mesin cuci 1 tabung surabaya',
    'service mesin cuci otomatis surabaya', 'service pengering mesin cuci surabaya',
    // Parts
    'ganti bearing mesin cuci surabaya', 'ganti seal mesin cuci surabaya',
    'ganti motor mesin cuci surabaya', 'ganti gearbox mesin cuci surabaya',
    'ganti belt mesin cuci surabaya', 'ganti pompa mesin cuci surabaya',
    'ganti timer mesin cuci surabaya', 'ganti modul mesin cuci surabaya',
    'ganti door lock mesin cuci surabaya', 'ganti drain valve mesin cuci surabaya',
    // Brands
    'service mesin cuci samsung surabaya', 'service mesin cuci lg surabaya',
    'service mesin cuci panasonic surabaya', 'service mesin cuci sharp surabaya',
    'service mesin cuci electrolux surabaya', 'service mesin cuci aqua surabaya',
    'service mesin cuci polytron surabaya', 'service mesin cuci sanken surabaya',
    'service mesin cuci modena surabaya', 'service mesin cuci midea surabaya',
    // Trust
    'service mesin cuci terpercaya surabaya', 'service mesin cuci profesional surabaya',
    'teknisi mesin cuci berpengalaman surabaya', 'service mesin cuci cepat surabaya',
    'service mesin cuci hari ini surabaya', 'service mesin cuci terdekat dari lokasi saya'
  ]),
  'service-kulkas': expandKeywordsWithAreas([
    // Primary
    'servis kulkas surabaya', 'service kulkas surabaya', 'jasa service kulkas surabaya',
    'perbaikan kulkas surabaya', 'tukang kulkas surabaya', 'isi freon kulkas surabaya',
    'service kulkas panggilan surabaya', 'servis kulkas terdekat', 'biaya service kulkas surabaya',
    // Long-tail
    'harga service kulkas surabaya', 'service kulkas murah surabaya',
    'service kulkas bergaransi surabaya', 'jasa servis kulkas panggilan surabaya',
    'kulkas tidak dingin surabaya', 'kulkas terlalu dingin surabaya',
    'kulkas berisik surabaya', 'kulkas mati total surabaya',
    'kulkas bocor surabaya', 'kulkas netes air surabaya',
    'kulkas lampu mati surabaya', 'kulkas beku berlebihan surabaya',
    // Type-specific
    'service kulkas 1 pintu surabaya', 'service kulkas 2 pintu surabaya',
    'service kulkas side by side surabaya', 'service kulkas inverter surabaya',
    'service kulkas mini surabaya', 'service kulkas besar surabaya',
    // Parts
    'ganti kompresor kulkas surabaya', 'harga ganti kompresor kulkas surabaya',
    'ganti freon kulkas surabaya', 'harga isi freon kulkas surabaya',
    'ganti thermostat kulkas surabaya', 'ganti timer defrost kulkas surabaya',
    'ganti evaporator kulkas surabaya', 'ganti fan motor kulkas surabaya',
    'ganti karet pintu kulkas surabaya', 'ganti door seal kulkas surabaya',
    // Brands
    'service kulkas samsung surabaya', 'service kulkas lg surabaya',
    'service kulkas panasonic surabaya', 'service kulkas sharp surabaya',
    'service kulkas toshiba surabaya', 'service kulkas hitachi surabaya',
    'service kulkas aqua surabaya', 'service kulkas polytron surabaya',
    'service kulkas sanyo surabaya', 'service kulkas electrolux surabaya',
    // Trust
    'service kulkas terpercaya surabaya', 'service kulkas profesional surabaya',
    'teknisi kulkas berpengalaman surabaya', 'service kulkas cepat surabaya',
    'service kulkas hari ini surabaya', 'service kulkas terdekat dari lokasi saya'
  ]),
  'service-freezer': expandKeywordsWithAreas([
    'servis freezer surabaya', 'service freezer surabaya', 'jasa service freezer surabaya',
    'perbaikan freezer box surabaya', 'service freezer box surabaya', 'servis freezer terdekat',
    'harga service freezer surabaya', 'service freezer murah surabaya',
    'freezer tidak dingin surabaya', 'freezer mati surabaya', 'freezer bocor surabaya',
    'isi freon freezer surabaya', 'ganti kompresor freezer surabaya',
    'ganti thermostat freezer surabaya', 'ganti karet pintu freezer surabaya',
    'service freezer es krim surabaya', 'service freezer frozen food surabaya',
    'service freezer GEA surabaya', 'service freezer modena surabaya',
    'service freezer RSA surabaya', 'service freezer sharp surabaya',
    'service freezer terpercaya surabaya', 'service freezer panggilan surabaya',
    'service freezer UMKM surabaya', 'service freezer toko surabaya'
  ]),
  'service-showcase': expandKeywordsWithAreas([
    'servis showcase surabaya', 'service showcase surabaya', 'perbaikan showcase surabaya',
    'service showcase pendingin surabaya', 'service display cooler surabaya',
    'harga service showcase surabaya', 'service showcase murah surabaya',
    'showcase tidak dingin surabaya', 'showcase mati surabaya', 'showcase bocor surabaya',
    'isi freon showcase surabaya', 'ganti kompresor showcase surabaya',
    'service showcase minuman surabaya', 'service showcase kue surabaya',
    'service showcase daging surabaya', 'service showcase minimarket surabaya',
    'service showcase toko surabaya', 'service showcase restoran surabaya',
    'service showcase GEA surabaya', 'service showcase modena surabaya',
    'service showcase sanden surabaya', 'service showcase RSA surabaya',
    'service showcase terpercaya surabaya', 'service showcase panggilan surabaya',
    'service display cooler minimarket surabaya', 'service kulkas display surabaya'
  ]),
  'service-chiller': expandKeywordsWithAreas([
    'servis chiller surabaya', 'service chiller surabaya', 'perbaikan chiller surabaya',
    'maintenance chiller surabaya', 'service chiller industri surabaya',
    'harga service chiller surabaya', 'service chiller murah surabaya',
    'chiller tidak dingin surabaya', 'chiller mati surabaya', 'chiller bocor surabaya',
    'isi refrigerant chiller surabaya', 'service kompresor chiller surabaya',
    'service kondensor chiller surabaya', 'service evaporator chiller surabaya',
    'perawatan chiller surabaya', 'kontrak maintenance chiller surabaya',
    'service chiller carrier surabaya', 'service chiller trane surabaya',
    'service chiller daikin surabaya', 'service chiller york surabaya',
    'service chiller gedung surabaya', 'service chiller pabrik surabaya',
    'service chiller hotel surabaya', 'service chiller mall surabaya',
    'instalasi chiller surabaya', 'service chiller terpercaya surabaya'
  ]),
  'instalasi-listrik': expandKeywordsWithAreas([
    // Primary
    'jasa instalasi listrik surabaya', 'tukang listrik surabaya', 'jasa listrik surabaya',
    'instalasi listrik rumah surabaya', 'perbaikan listrik surabaya', 'pasang listrik surabaya',
    'jasa kelistrikan surabaya',
    // Long-tail
    'harga jasa instalasi listrik surabaya', 'biaya instalasi listrik surabaya',
    'jasa listrik murah surabaya', 'tukang listrik murah surabaya',
    'tukang listrik terdekat surabaya', 'tukang listrik panggilan surabaya',
    'jasa listrik panggilan surabaya', 'jasa instalasi listrik rumah baru surabaya',
    // Problems
    'listrik konslet surabaya', 'perbaikan korsleting listrik surabaya',
    'listrik sering trip surabaya', 'mcb sering jatuh surabaya',
    'listrik mati sebagian surabaya', 'listrik tidak stabil surabaya',
    'konsleting listrik surabaya', 'hubungan pendek listrik surabaya',
    // Services
    'pasang mcb surabaya', 'pasang panel listrik surabaya', 'pasang instalasi listrik baru surabaya',
    'tambah daya listrik surabaya', 'penambahan daya PLN surabaya',
    'pasang stop kontak surabaya', 'pasang saklar surabaya',
    'pasang lampu surabaya', 'pasang fitting lampu surabaya',
    'pasang stabilizer surabaya', 'pasang grounding surabaya', 'pasang genset surabaya',
    'rewiring listrik surabaya', 'ganti kabel listrik surabaya',
    // Types
    'instalasi listrik rumah surabaya', 'instalasi listrik kantor surabaya',
    'instalasi listrik ruko surabaya', 'instalasi listrik toko surabaya',
    'instalasi listrik gudang surabaya', 'instalasi listrik pabrik surabaya',
    'instalasi listrik gedung surabaya', 'instalasi listrik restoran surabaya',
    // Trust
    'jasa listrik terpercaya surabaya', 'jasa listrik profesional surabaya',
    'teknisi listrik berpengalaman surabaya', 'jasa listrik bergaransi surabaya',
    'jasa listrik cepat surabaya', 'tukang listrik berpengalaman surabaya',
    'jasa listrik standar PLN surabaya', 'jasa listrik SNI surabaya'
  ])
}

// SEO-optimized title templates per service (covers 2 areas in title)
const serviceSeoTitles: { [key: string]: string } = {
  'service-ac': 'Jasa Servis AC Surabaya Sidoarjo Gresik - Service AC Panggilan Profesional Bergaransi',
  'service-mesin-cuci': 'Jasa Servis Mesin Cuci Surabaya Sidoarjo Gresik - Service Mesin Cuci Panggilan Bergaransi',
  'service-kulkas': 'Jasa Servis Kulkas Surabaya Sidoarjo Gresik - Service Kulkas Panggilan Profesional Bergaransi',
  'service-freezer': 'Jasa Servis Freezer Box Surabaya Sidoarjo Gresik - Service Freezer Profesional Bergaransi',
  'service-showcase': 'Jasa Servis Showcase Surabaya Sidoarjo Gresik - Service Showcase Pendingin Bergaransi',
  'service-chiller': 'Jasa Servis Chiller Surabaya Sidoarjo Gresik - Service Chiller Industri Profesional',
  'instalasi-listrik': 'Jasa Instalasi Listrik Surabaya Sidoarjo Gresik - Tukang Listrik Profesional Bergaransi'
}

interface PageSEOProps {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generatePageSEO({
  title,
  description,
  path = '',
  image = siteConfig.ogImage,
  noIndex = false,
  keywords = []
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const fullTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
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
}

export function generateServiceSEO(service: {
  title: string
  description: string
  slug: string
}): Metadata {
  const seoTitle = serviceSeoTitles[service.slug] || `Jasa ${service.title} Surabaya Sidoarjo Gresik - Teknisi Profesional Bergaransi`
  const keywords = serviceKeywords[service.slug] || []

  return generatePageSEO({
    title: seoTitle,
    description: `${service.description} Layanan ${service.title.toLowerCase()} profesional di Surabaya, Sidoarjo & Gresik dengan teknisi berpengalaman & bergaransi. Harga mulai terjangkau. Hubungi ${siteConfig.phone} sekarang!`,
    path: `/layanan/${service.slug}`,
    keywords,
  })
}

export { siteConfig, serviceKeywords, serviceAreas, surabayaDistricts }
