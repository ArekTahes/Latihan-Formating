'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Shield, 
  BadgeCheck, 
  Wrench, 
  Headphones,
  Wallet,
  Award,
  ThumbsUp
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Respon Cepat',
    description: 'Teknisi kami siap datang dalam waktu singkat. Layanan darurat tersedia.'
  },
  {
    icon: Shield,
    title: 'Bergaransi',
    description: 'Setiap perbaikan dilengkapi garansi service untuk ketenangan Anda.'
  },
  {
    icon: BadgeCheck,
    title: 'Teknisi Bersertifikat',
    description: 'Tim teknisi profesional dengan pengalaman lebih dari 10 tahun.'
  },
  {
    icon: Wrench,
    title: 'Peralatan Lengkap',
    description: 'Dilengkapi peralatan modern dan spare part original berkualitas.'
  },
  {
    icon: Headphones,
    title: 'Konsultasi Gratis',
    description: 'Konsultasikan masalah elektronik Anda tanpa biaya apapun.'
  },
  {
    icon: Wallet,
    title: 'Harga Transparan',
    description: 'Biaya jelas di awal tanpa biaya tersembunyi. Sesuai budget Anda.'
  },
  {
    icon: Award,
    title: 'Berpengalaman',
    description: 'Sudah melayani ribuan pelanggan di Surabaya dan sekitarnya.'
  },
  {
    icon: ThumbsUp,
    title: 'Kepuasan Terjamin',
    description: 'Komitmen kami adalah kepuasan pelanggan. Tidak puas? Kami perbaiki!'
  }
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-accent-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kenapa Pilih Jasa Servis Kami di Surabaya?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            CV. Arsa Prima Solution berkomitmen memberikan layanan servis AC, kulkas, mesin cuci & instalasi listrik terbaik dengan standar profesional di Surabaya.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '10+', label: 'Tahun Pengalaman' },
            { value: '5000+', label: 'Pelanggan Puas' },
            { value: '15+', label: 'Teknisi Profesional' },
            { value: '98%', label: 'Tingkat Kepuasan' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
