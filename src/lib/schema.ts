// JSON-LD Schema Generator for SEO - Optimized for Google Rich Results

const businessInfo = {
  name: 'CV. Arsa Prima Solution',
  alternateName: ['Arsa Prima Solution', 'CV Arsa Prima', 'Arsa Prima Surabaya'],
  description: 'Jasa servis AC Surabaya, service kulkas, mesin cuci, freezer, showcase, chiller & instalasi listrik profesional. Teknisi berpengalaman sejak 2014, bergaransi, harga transparan.',
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
    'Mo-Sa 08:00-17:00'
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
    'Surabaya Pusat', 'Surabaya Timur', 'Surabaya Barat', 
    'Surabaya Utara', 'Surabaya Selatan', 'Sidoarjo', 'Gresik'
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    priceRange: businessInfo.priceRange,
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer',
    image: `${businessInfo.url}/images/og-image.jpg`,
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
      'Service AC', 'Servis AC', 'Cuci AC', 'Isi Freon AC',
      'Service Kulkas', 'Servis Kulkas', 'Service Mesin Cuci',
      'Service Freezer', 'Service Showcase', 'Service Chiller',
      'Instalasi Listrik', 'Panel Listrik', 'Perbaikan Listrik'
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
    alternateName: [`Servis ${service.title.replace('Service ', '')} Surabaya`, `${service.title} Panggilan Surabaya`],
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
