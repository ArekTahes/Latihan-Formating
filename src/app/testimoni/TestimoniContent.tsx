'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import testimonials from '@/data/testimonials.json'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

export default function TestimoniContent() {
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
              Testimoni
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Testimoni Pelanggan Jasa Servis AC & Elektronik Surabaya
            </h1>
            <p className="text-lg text-gray-300">
              Kepuasan pelanggan adalah prioritas kami. Berikut testimoni pelanggan servis AC, kulkas, 
              mesin cuci & instalasi listrik dari CV. Arsa Prima Solution Surabaya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9', label: 'Rating Rata-rata', suffix: '/5' },
              { value: '5000+', label: 'Pelanggan Dilayani' },
              { value: '98%', label: 'Tingkat Kepuasan' },
              { value: '150+', label: 'Ulasan Positif' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary-200" />
                </div>
                
                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.service} • {testimonial.location}
                    </div>
                  </div>
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
              Butuh Jasa Servis AC atau Elektronik Profesional?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Hubungi CV. Arsa Prima Solution sekarang dan rasakan pelayanan servis AC, kulkas, mesin cuci & listrik terbaik di Surabaya
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
