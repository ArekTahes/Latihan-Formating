'use client'

import { useState } from 'react'
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

function GalleryCard({ item, index }: { item: typeof galleryData[0], index: number }) {
  const [imgError, setImgError] = useState(false)
  const IconComponent = iconMap[item.icon] || Wind
  const gradient = item.gradient || 'from-primary-400 to-secondary-600'
  const imageUrl = item.image

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl aspect-square"
    >
      {/* Image or Gradient Fallback */}
      {imageUrl && !imgError ? (
        <img
          src={imageUrl}
          alt={item.alt || `${item.title} - servis ac surabaya teknisi profesional`}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <IconComponent className="w-24 h-24 text-white/30" />
          </div>
        </>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-semibold text-base md:text-lg mb-0.5 drop-shadow">
          {item.title}
        </h3>
        <p className="text-gray-200 text-sm drop-shadow">
          {item.category}
        </p>
      </div>
    </motion.div>
  )
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
          {displayItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
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
