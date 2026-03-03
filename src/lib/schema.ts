// JSON-LD Schema Generator for SEO - Optimized for Google Rich Results

const businessInfo = {
  name: 'CV. Arsa Prima Solution',
  alternateName: [
    'Arsa Prima Solution', 'CV Arsa Prima', 'Arsa Prima Surabaya',
    'Service AC Arsa Prima', 'Arsa Prima Service AC',
    'Jasa Service AC Surabaya Arsa Prima', 'Tukang AC Arsa Prima'
  ],
  description: 'Jasa servis AC Surabaya, Sidoarjo & Gresik. Service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman sejak 2014, bergaransi, harga transparan.',
  url: 'https://arsaprimasolution.com',
  phone: '+6287865502146',
  phone2: '+6287759731023',
  whatsapp: '087865502146',
  email: 'Hariteknik1976@gmail.com',
  address: {
    street: 'Surabaya',
    district: '',
    city: 'Surabaya',
    region: 'Jawa Timur',
    postalCode: '60256',
    country: 'ID'
  },
  geo: {
    latitude: -7.2654,
    longitude: 112.72155
  },
  openingHours: [
    'Mo-Su 08:00-17:00'
  ],
  priceRange: 'Rp 50.000 - Rp 5.000.000',
  foundingDate: '2014',
  services: [
    'Servis AC',
    'Service AC',
    'Servis Mesin Cuci',
    'Service Mesin Cuci',
    'Servis Kulkas',
    'Service Kulkas',
    'Servis Freezer Box',
    'Service Freezer',
    'Servis Showcase',
    'Service Showcase',
    'Servis Chiller',
    'Service Chiller',
    'Instalasi Listrik',
    'Jasa Listrik'
  ],
  serviceAreas: [
    'Surabaya', 'Surabaya Pusat', 'Surabaya Timur', 'Surabaya Barat',
    'Surabaya Utara', 'Surabaya Selatan', 'Sidoarjo', 'Gresik',
    // Kecamatan Surabaya
    'Gubeng', 'Tegalsari', 'Genteng', 'Bubutan', 'Simokerto',
    'Wonokromo', 'Sawahan', 'Dukuh Pakis', 'Gayungan', 'Jambangan',
    'Wonocolo', 'Tenggilis Mejoyo', 'Rungkut', 'Gunung Anyar', 'Sukolilo',
    'Mulyorejo', 'Tambaksari', 'Kenjeran', 'Bulak', 'Semampir',
    'Pabean Cantikan', 'Krembangan', 'Asemrowo', 'Benowo', 'Pakal',
    'Lakarsantri', 'Sambikerep', 'Tandes', 'Sukomanunggal', 'Wiyung',
    'Karangpilang', 'Driyorejo',
    // Kecamatan Sidoarjo
    'Waru', 'Gedangan', 'Sedati', 'Buduran', 'Candi', 'Taman', 'Krian',
    // Kecamatan Gresik
    'Kebomas', 'Manyar', 'Cerme', 'Driyorejo', 'Menganti'
  ]
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'ElectricalContractor'],
    '@id': `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: [businessInfo.phone, businessInfo.phone2],
    email: businessInfo.email,
    foundingDate: businessInfo.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    priceRange: businessInfo.priceRange,
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer',
    image: `${businessInfo.url}/images/og-image.svg`,
    logo: {
      '@type': 'ImageObject',
      url: `${businessInfo.url}/logo.svg`,
      width: 200,
      height: 200
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Jasa Servis Elektronik & Instalasi Listrik',
      itemListElement: businessInfo.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          areaServed: {
            '@type': 'City',
            name: 'Surabaya'
          }
        },
        position: index + 1
      }))
    },
    areaServed: businessInfo.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    knowsAbout: [
      // Servis AC
      'Service AC', 'Servis AC', 'Cuci AC', 'Isi Freon AC', 'Ganti Freon AC',
      'Perbaikan AC', 'AC Tidak Dingin', 'AC Bocor', 'AC Berisik', 'Ganti Kompresor AC',
      'Pasang AC Baru', 'Bongkar Pasang AC', 'Service AC Split', 'Service AC Inverter',
      'Service AC Standing Floor', 'Service AC Cassette', 'Service AC Duct',
      'Service AC Central', 'Service AC Daikin', 'Service AC Panasonic',
      'Service AC LG', 'Service AC Samsung', 'Service AC Sharp', 'Service AC Gree',
      'Service AC Mitsubishi', 'Service AC Toshiba', 'Service AC Changhong',
      'Service AC Kantor', 'Service AC Ruko', 'Service AC Pabrik',
      // Servis Kulkas
      'Service Kulkas', 'Servis Kulkas', 'Perbaikan Kulkas', 'Kulkas Tidak Dingin',
      'Ganti Kompresor Kulkas', 'Isi Freon Kulkas', 'Ganti Thermostat Kulkas',
      'Service Kulkas 1 Pintu', 'Service Kulkas 2 Pintu', 'Service Kulkas Side by Side',
      'Service Kulkas Inverter', 'Service Kulkas Samsung', 'Service Kulkas LG',
      'Service Kulkas Sharp', 'Service Kulkas Polytron', 'Service Kulkas Panasonic',
      // Servis Mesin Cuci
      'Service Mesin Cuci', 'Servis Mesin Cuci', 'Perbaikan Mesin Cuci',
      'Mesin Cuci Tidak Berputar', 'Mesin Cuci Error', 'Ganti Bearing Mesin Cuci',
      'Ganti Dinamo Mesin Cuci', 'Service Mesin Cuci Top Loading', 'Service Mesin Cuci Front Loading',
      'Service Mesin Cuci Samsung', 'Service Mesin Cuci LG', 'Service Mesin Cuci Sharp',
      'Service Mesin Cuci Electrolux', 'Board Mesin Cuci Rusak',
      // Servis Freezer, Showcase, Chiller
      'Service Freezer', 'Service Freezer Box', 'Service Showcase', 'Service Display Cooler',
      'Service Chiller', 'Service Chiller Industri', 'Service Cold Storage',
      'Service Mesin Es Batu', 'Service Kulkas Dagang',
      // Instalasi Listrik
      'Instalasi Listrik', 'Panel Listrik', 'Perbaikan Listrik', 'Jasa Listrik',
      'Tukang Listrik', 'Pasang MCB', 'Perbaikan Korsleting', 'Listrik Konslet',
      'Instalasi Listrik Rumah', 'Instalasi Listrik Kantor', 'Instalasi Listrik Ruko',
      'Tambah Daya Listrik', 'Pasang Stop Kontak', 'Perbaikan Panel Listrik',
      'Wiring Listrik', 'Instalasi Listrik 3 Phase'
    ]
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessInfo.url}/#website`,
    url: businessInfo.url,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      '@id': `${businessInfo.url}/#organization`
    },
    inLanguage: 'id-ID'
  }
}

export function generateWebPageSchema(page: {
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${businessInfo.url}${page.path}/#webpage`,
    url: `${businessInfo.url}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: {
      '@id': `${businessInfo.url}/#website`
    },
    about: {
      '@id': `${businessInfo.url}/#organization`
    },
    inLanguage: 'id-ID'
  }
}

export function generateServiceSchema(service: {
  title: string
  description: string
  slug: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${businessInfo.url}/layanan/${service.slug}/#service`,
    name: `Jasa ${service.title} Surabaya`,
    alternateName: [
      `Servis ${service.title.replace('Service ', '')} Surabaya`,
      `${service.title} Panggilan Surabaya`,
      `Jasa ${service.title} Sidoarjo`,
      `Jasa ${service.title} Gresik`,
      `${service.title} Terdekat`
    ],
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      telephone: businessInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.region,
        addressCountry: businessInfo.address.country
      }
    },
    areaServed: businessInfo.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    serviceType: service.title,
    url: `${businessInfo.url}/layanan/${service.slug}`,
    ...(service.priceRange && { 
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          price: service.priceRange
        }
      }
    }),
    termsOfService: 'Garansi service 1-3 bulan',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Layanan ${service.title}`
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${businessInfo.url}${item.url}`
    }))
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export { businessInfo }
