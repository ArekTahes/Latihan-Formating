'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import { getDisplayNumber } from '@/components/whatsapp/whatsappGenerator'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Butuh Jasa Servis AC atau Elektronik di Surabaya?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Jangan biarkan AC, kulkas, atau mesin cuci Anda rusak lebih lama. 
            Hubungi CV. Arsa Prima Solution sekarang untuk penanganan profesional & bergaransi!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton 
              text="Hubungi via WhatsApp"
              size="lg"
              className="!bg-green-500 !text-white hover:!bg-green-600 shadow-2xl"
              params={{ 
                customMessage: 'Halo CV. Arsa Prima Solution, saya butuh bantuan service elektronik. Mohon informasinya.' 
              }}
            />
            <a 
              href={`tel:${getDisplayNumber().replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-lg"
            >
              <Phone className="w-6 h-6" />
              {getDisplayNumber()}
            </a>
          </div>

          <p className="text-white/70 mt-6 text-sm">
            Layanan tersedia Senin - Sabtu, 08:00 - 17:00 WIB
          </p>
        </motion.div>
      </div>
    </section>
  )
}
