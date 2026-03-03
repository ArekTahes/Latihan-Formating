'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Wind, 
  WashingMachine, 
  Refrigerator, 
  Snowflake, 
  MonitorSpeaker,
  ThermometerSnowflake,
  Zap,
  CheckCircle,
  ArrowLeft,
  Phone,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import faqData from '@/data/faqs.json'

interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  icon: string
  image: string
  services: string[]
  benefits: string[]
  brands: string[]
  priceRange: string
}

const iconMap: { [key: string]: React.ElementType } = {
  Wind,
  WashingMachine,
  Refrigerator,
  Snowflake,
  MonitorSpeaker,
  ThermometerSnowflake,
  Zap
}

const colorMap: { [key: string]: string } = {
  'service-ac': 'from-blue-500 to-cyan-500',
  'service-mesin-cuci': 'from-purple-500 to-pink-500',
  'service-kulkas': 'from-green-500 to-teal-500',
  'service-freezer': 'from-sky-500 to-blue-500',
  'service-showcase': 'from-orange-500 to-red-500',
  'service-chiller': 'from-indigo-500 to-purple-500',
  'instalasi-listrik': 'from-yellow-500 to-orange-500'
}

export default function ServiceDetailContent({ service }: { service: Service }) {
  const IconComponent = iconMap[service.icon] || Wind
  const colorClass = colorMap[service.id] || 'from-primary-500 to-accent-500'

  const faqs = (faqData as Record<string, Array<{ question: string; answer: string }>>)[service.slug] || []

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.fullDescription,
    slug: service.slug,
    priceRange: service.priceRange
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Layanan', url: '/layanan' },
    { name: service.title, url: `/layanan/${service.slug}` }
  ])

  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${colorClass} py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-white/80 text-sm">
              <li><Link href="/" className="hover:text-white">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/layanan" className="hover:text-white">Layanan</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{service.title}</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.title} Profesional di Surabaya
              </h1>
              
              <p className="text-lg text-white/90 mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  text="Hubungi Sekarang"
                  service={service.title}
                  size="lg"
                  className="!bg-white !text-green-600 hover:!bg-gray-100 shadow-lg"
                />
                <a 
                  href="tel:087865502146"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  0878-6550-2146
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <IconComponent className="w-40 h-40 text-white/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Clock className="w-8 h-8 text-primary-500" />
              <div>
                <div className="text-sm text-gray-500">Respon</div>
                <div className="font-semibold text-secondary-900">Cepat & Tepat</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Shield className="w-8 h-8 text-primary-500" />
              <div>
                <div className="text-sm text-gray-500">Garansi</div>
                <div className="font-semibold text-secondary-900">1-3 Bulan</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Star className="w-8 h-8 text-primary-500" />
              <div>
                <div className="text-sm text-gray-500">Rating</div>
                <div className="font-semibold text-secondary-900">4.9/5.0</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-primary-500" />
              <div>
                <div className="text-sm text-gray-500">Harga</div>
                <div className="font-semibold text-secondary-900">{service.priceRange}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Layanan {service.title} Kami
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Keunggulan Layanan Kami
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${colorClass} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 pt-1">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Brands */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Merk yang Kami Tangani
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.brands.map((brand, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${colorClass} rounded-2xl p-8 text-white`}
                >
                  <h3 className="text-xl font-bold mb-4">
                    Butuh {service.title}?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penanganan cepat dari teknisi profesional.
                  </p>
                  <WhatsAppButton 
                    text="Hubungi via WhatsApp"
                    service={service.title}
                    className="w-full !bg-white !text-green-600 hover:!bg-gray-100 shadow-lg"
                  />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-secondary-900 mb-4">
                    Hubungi Kami
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-500" />
                      0878-6550-2146 (Pak Adi)
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-500" />
                      0877-5973-1023 (Pak Nardi)
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-500" />
                      Senin - Sabtu, 08:00 - 17:00
                    </p>
                  </div>
                </motion.div>

                {/* Back Link */}
                <Link 
                  href="/layanan"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Daftar Layanan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Rich Snippets */}
      {faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                Pertanyaan Umum Tentang {service.title} Surabaya
              </h2>
              <p className="text-gray-600">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan {service.title.toLowerCase()} kami di Surabaya.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-secondary-900 hover:bg-gray-100 transition-colors list-none">
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-primary-500 flex-shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.details>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="text-gray-600 mb-4">Masih punya pertanyaan?</p>
              <WhatsAppButton 
                text="Tanya via WhatsApp"
                service={service.title}
                size="lg"
              />
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
