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
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import services from '@/data/services.json'

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

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-accent-400 rounded-full text-sm font-semibold mb-4">
              Layanan Kami
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Jasa Servis AC, Kulkas, Mesin Cuci & Instalasi Listrik Surabaya
            </h1>
            <p className="text-lg text-gray-300">
              CV. Arsa Prima Solution menyediakan layanan jasa servis AC, service kulkas, 
              servis mesin cuci, serta instalasi listrik profesional di Surabaya dengan teknisi berpengalaman dan harga terjangkau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Wind
              const colorClass = colorMap[service.id] || 'from-primary-500 to-accent-500'
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
                        {service.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        {service.fullDescription}
                      </p>

                      {/* Key Services Preview */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.services.slice(0, 4).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <WhatsAppButton 
                          text="Pesan Sekarang" 
                          service={service.title}
                          className="!bg-green-600 !text-white hover:!bg-green-700"
                        />
                        <Link 
                          href={`/layanan/${service.slug}`}
                          className="btn-secondary flex items-center justify-center gap-2"
                        >
                          Detail Layanan <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className={`bg-gradient-to-br ${colorClass} min-h-[300px] md:min-h-full flex items-center justify-center ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                      <IconComponent className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh Jasa Servis AC atau Elektronik Profesional di Surabaya?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi CV. Arsa Prima Solution sekarang untuk konsultasi gratis. Teknisi berpengalaman, bergaransi, harga transparan.
          </p>
          <WhatsAppButton 
            text="Hubungi Kami via WhatsApp"
            size="lg"
            className="!bg-white !text-green-600 hover:!bg-gray-100 shadow-lg"
          />
        </div>
      </section>
    </>
  )
}
