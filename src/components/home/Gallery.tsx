'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Wind, Refrigerator, WashingMachine, Zap, Wrench } from 'lucide-react'
import galleryData from '@/data/gallery.json'

const iconMap: { [key: string]: React.ElementType } = {
  Wind,
  Refrigerator,
  WashingMachine,
  Zap,
  Wrench
}

export default function Gallery() {
  // Show only first 6 items on homepage
  const displayItems = galleryData.slice(0, 6)

  return (
    <section className="section-padding bg-white">
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
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Galeri Dokumentasi Servis AC & Elektronik Surabaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat hasil kerja teknisi servis AC, kulkas, mesin cuci & instalasi listrik 
            profesional kami di berbagai lokasi pelanggan Surabaya.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => {
            const IconComponent = iconMap[(item as any).icon] || Wind
            const gradient = (item as any).gradient || 'from-primary-400 to-secondary-600'
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
                role="img"
                aria-label={(item as any).alt || item.title}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-300 group-hover:scale-105`} />
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconComponent className="w-24 h-24 text-white/30 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/galeri" className="btn-primary">
            Lihat Semua Galeri
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
