'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  CheckCircle,
  Building2,
  Wrench,
  Clock
} from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

const values = [
  {
    icon: Heart,
    title: 'Integritas',
    description: 'Kami selalu jujur dan transparan dalam setiap pelayanan kepada pelanggan.'
  },
  {
    icon: Award,
    title: 'Profesionalisme',
    description: 'Teknisi kami terlatih dan bersertifikat untuk memberikan hasil terbaik.'
  },
  {
    icon: Target,
    title: 'Kepuasan Pelanggan',
    description: 'Fokus utama kami adalah kepuasan dan kenyamanan setiap pelanggan.'
  },
  {
    icon: Clock,
    title: 'Ketepatan Waktu',
    description: 'Kami menghargai waktu Anda dengan datang tepat waktu dan bekerja efisien.'
  }
]

const milestones = [
  { year: '2014', event: 'CV. Arsa Prima Solution didirikan di Surabaya' },
  { year: '2016', event: 'Memperluas layanan ke seluruh wilayah Surabaya' },
  { year: '2018', event: 'Menambahkan layanan instalasi listrik' },
  { year: '2020', event: 'Mencapai 3000+ pelanggan yang dilayani' },
  { year: '2022', event: 'Ekspansi ke Sidoarjo dan Gresik' },
  { year: '2024', event: 'Mencapai 5000+ pelanggan puas' }
]

export default function TentangKamiContent() {
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
              Tentang Kami
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CV. Arsa Prima Solution - Jasa Servis Elektronik Surabaya
            </h1>
            <p className="text-lg text-gray-300">
              Mitra terpercaya Anda untuk jasa servis AC, kulkas, mesin cuci, dan instalasi listrik 
              profesional di Surabaya dan sekitarnya sejak 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Siapa Kami?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-secondary-900">CV. Arsa Prima Solution</strong> adalah perusahaan 
                  yang bergerak di bidang jasa service elektronik dan instalasi listrik yang berbasis di 
                  Surabaya, Jawa Timur. Berdiri sejak tahun 2014, kami telah melayani ribuan pelanggan 
                  dari rumah tangga, UMKM, hingga perusahaan.
                </p>
                <p>
                  Dengan tim teknisi yang berpengalaman dan bersertifikat, kami berkomitmen memberikan 
                  pelayanan terbaik dengan standar profesional. Setiap pekerjaan kami tangani dengan 
                  teliti, cepat, dan tentunya dengan harga yang transparan.
                </p>
                <p>
                  Kami percaya bahwa kepercayaan pelanggan adalah aset terbesar kami. Oleh karena itu, 
                  kami selalu berusaha memberikan yang terbaik dan memastikan setiap pelanggan merasa 
                  puas dengan layanan kami.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                  <Building2 className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-secondary-900">10+</div>
                    <div className="text-sm text-gray-500">Tahun Pengalaman</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                  <Users className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-secondary-900">5000+</div>
                    <div className="text-sm text-gray-500">Pelanggan Puas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                  <Wrench className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-secondary-900">15+</div>
                    <div className="text-sm text-gray-500">Teknisi Profesional</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                  <Award className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-secondary-900">98%</div>
                    <div className="text-sm text-gray-500">Tingkat Kepuasan</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Visi Kami</h3>
                  <p className="text-gray-600 mb-6">
                    Menjadi penyedia jasa service elektronik dan instalasi listrik terpercaya 
                    dan terdepan di Surabaya dengan mengutamakan kualitas, kecepatan, dan 
                    kepuasan pelanggan.
                  </p>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Misi Kami</h3>
                  <ul className="space-y-3">
                    {[
                      'Memberikan layanan service berkualitas tinggi dengan harga terjangkau',
                      'Meningkatkan kompetensi teknisi melalui pelatihan berkelanjutan',
                      'Membangun hubungan jangka panjang dengan pelanggan melalui kepercayaan',
                      'Berkontribusi pada perkembangan industri service elektronik di Indonesia'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang kami pegang teguh dalam setiap pelayanan kepada pelanggan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan CV. Arsa Prima Solution
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-primary-600 font-semibold mb-1">{milestone.year}</div>
                  <div className="text-gray-700">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Menggunakan Jasa Kami?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang dan rasakan pelayanan profesional dari CV. Arsa Prima Solution
            </p>
            <WhatsAppButton 
              text="Hubungi Kami Sekarang"
              size="lg"
              className="!bg-white !text-green-600 hover:!bg-gray-100 shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
