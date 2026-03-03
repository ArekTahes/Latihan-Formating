'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

const slides = [
  {
    id: 1,
    title: 'Jasa Servis AC & Service Elektronik Profesional di Surabaya',
    subtitle: 'Teknisi Berpengalaman • Respon Cepat • Bergaransi • Harga Transparan',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Servis AC, Kulkas, Mesin Cuci & Instalasi Listrik Surabaya',
    subtitle: 'AC • Mesin Cuci • Kulkas • Freezer • Showcase • Chiller • Instalasi Listrik',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Solusi Tepat Service Elektronik untuk Rumah & Usaha Anda',
    subtitle: 'Melayani servis panggilan ke rumah, kantor, toko, dan UMKM di seluruh Surabaya',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Datang Cepat • Kerja Rapi • Bergaransi',
    subtitle: 'CV. Arsa Prima Solution - Kepuasan pelanggan adalah prioritas utama kami',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&auto=format&fit=crop&q=80'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-primary-900/70 to-secondary-900/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-white leading-tight mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
              >
                <WhatsAppButton 
                  text="Hubungi Sekarang"
                  size="lg"
                  params={{ customMessage: 'Halo CV. Arsa Prima Solution, saya ingin konsultasi tentang layanan service elektronik.' }}
                />
                <Link 
                  href="/layanan"
                  className="btn-secondary text-lg"
                >
                  Lihat Layanan Kami
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
