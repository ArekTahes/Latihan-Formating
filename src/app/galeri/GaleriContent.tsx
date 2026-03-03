'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Wind, Refrigerator, WashingMachine, Zap, Wrench } from 'lucide-react'
import galleryData from '@/data/gallery.json'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

const iconMap: { [key: string]: React.ElementType } = {
  Wind,
  Refrigerator,
  WashingMachine,
  Zap,
  Wrench
}

export default function GaleriContent() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null)

  const getIcon = (item: typeof galleryData[0]) => {
    const IconComponent = iconMap[(item as any).icon] || Wind
    return IconComponent
  }

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
              Galeri
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Galeri Dokumentasi Servis AC & Elektronik Surabaya
            </h1>
            <p className="text-lg text-gray-300">
              Lihat hasil kerja teknisi servis AC, kulkas, mesin cuci & instalasi listrik 
              kami di berbagai lokasi pelanggan Surabaya dan sekitarnya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <span className="px-6 py-2 bg-primary-500 text-white rounded-full font-semibold text-base shadow">
              Galeri Pekerjaan
            </span>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryData.map((item, index) => {
                const IconComponent = getIcon(item)
                const gradient = (item as any).gradient || 'from-primary-400 to-secondary-600'
                
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div 
                      className="relative overflow-hidden rounded-2xl aspect-square"
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
                        <IconComponent className="w-20 h-20 text-white/30 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (() => {
          const IconComponent = getIcon(selectedImage)
          const gradient = (selectedImage as any).gradient || 'from-primary-400 to-secondary-600'
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Illustrated Header */}
                  <div className={`relative aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }}
                    />
                    <IconComponent className="w-32 h-32 text-white/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {selectedImage.category}
                      </span>
                      <WhatsAppButton 
                        text="Tanya Layanan Ini"
                        service={selectedImage.category}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh Jasa Servis AC atau Elektronik di Surabaya?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi CV. Arsa Prima Solution sekarang untuk layanan servis AC, kulkas, mesin cuci & instalasi listrik profesional bergaransi
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
