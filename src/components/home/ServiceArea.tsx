'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

const areas = [
  'Surabaya Pusat',
  'Surabaya Utara',
  'Surabaya Timur',
  'Surabaya Selatan',
  'Surabaya Barat',
  'Sidoarjo',
  'Gresik',
  'Sekitarnya'
]

const kecamatan = [
  'Sawahan', 'Tegalsari', 'Genteng', 'Bubutan', 'Simokerto',
  'Kenjeran', 'Semampir', 'Pabean Cantikan', 'Krembangan',
  'Tambaksari', 'Gubeng', 'Rungkut', 'Tenggilis Mejoyo', 'Gunung Anyar',
  'Sukolilo', 'Mulyorejo', 'Wonokromo', 'Wonocolo', 'Wiyung',
  'Karangpilang', 'Jambangan', 'Gayungan', 'Dukuh Pakis',
  'Sukomanunggal', 'Tandes', 'Asemrowo', 'Benowo', 'Pakal',
  'Lakarsantri', 'Sambikerep', 'Bulak'
]

export default function ServiceArea() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              Area Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Jangkauan Layanan Servis AC & Elektronik Surabaya
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim teknisi servis AC dan elektronik kami siap datang ke lokasi Anda di seluruh wilayah 
              Surabaya, Sidoarjo, Gresik, dan sekitarnya. Layanan panggilan ke rumah dengan respon cepat.
            </p>

            {/* Main Areas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </motion.div>
              ))}
            </div>

            <WhatsAppButton 
              text="Cek Ketersediaan di Lokasi Anda"
              size="lg"
              params={{ 
                customMessage: 'Halo CV. Arsa Prima Solution, apakah area saya termasuk dalam jangkauan layanan Anda? Lokasi saya di [ALAMAT]' 
              }}
            />
          </motion.div>

          {/* Kecamatan List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-500" />
              Kecamatan di Surabaya
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {kecamatan.map((kec, index) => (
                <motion.div
                  key={kec}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{kec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
