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
  ArrowRight
} from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

const services = [
  {
    id: 'service-ac',
    title: 'Servis AC Surabaya',
    description: 'Jasa servis AC panggilan di Surabaya. Cuci AC, isi freon, perbaikan kompresor, instalasi AC baru semua merk.',
    icon: Wind,
    href: '/layanan/service-ac',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'service-mesin-cuci',
    title: 'Servis Mesin Cuci',
    description: 'Jasa servis mesin cuci Surabaya. Perbaikan top loading, front loading & 2 tabung semua merk.',
    icon: WashingMachine,
    href: '/layanan/service-mesin-cuci',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'service-kulkas',
    title: 'Servis Kulkas Surabaya',
    description: 'Jasa servis kulkas di Surabaya. Perbaikan kulkas 1 pintu, 2 pintu, side by side. Isi freon & ganti kompresor.',
    icon: Refrigerator,
    href: '/layanan/service-kulkas',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'service-freezer',
    title: 'Servis Freezer Box',
    description: 'Jasa servis freezer box Surabaya untuk rumah tangga & usaha UMKM. Bergaransi.',
    icon: Snowflake,
    href: '/layanan/service-freezer',
    color: 'from-sky-500 to-blue-500'
  },
  {
    id: 'service-showcase',
    title: 'Servis Showcase',
    description: 'Jasa servis showcase pendingin Surabaya untuk toko, minimarket & restoran.',
    icon: MonitorSpeaker,
    href: '/layanan/service-showcase',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'service-chiller',
    title: 'Servis Chiller',
    description: 'Jasa servis chiller Surabaya untuk kebutuhan industri & komersial. Teknisi profesional.',
    icon: ThermometerSnowflake,
    href: '/layanan/service-chiller',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'instalasi-listrik',
    title: 'Jasa Instalasi Listrik',
    description: 'Jasa instalasi & perbaikan listrik Surabaya untuk rumah, kantor & gedung. Sesuai standar PLN.',
    icon: Zap,
    href: '/layanan/instalasi-listrik',
    color: 'from-yellow-500 to-orange-500'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="layanan">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Jasa Servis Elektronik & Instalasi Listrik Surabaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CV. Arsa Prima Solution menyediakan jasa servis AC, service kulkas, mesin cuci, freezer, showcase, chiller dan instalasi listrik profesional di Surabaya. Teknisi berpengalaman, bergaransi, harga transparan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <div className="card h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Actions */}
                <div className="flex flex-col gap-2 mt-auto">
                  <WhatsAppButton 
                    text="Pesan Sekarang" 
                    service={service.title}
                    size="sm"
                    className="w-full"
                  />
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm py-2"
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/layanan" className="btn-primary">
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
