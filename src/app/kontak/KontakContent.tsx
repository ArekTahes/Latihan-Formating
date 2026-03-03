'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import { getWhatsAppNumber } from '@/components/whatsapp/whatsappGenerator'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    content: 'Surabaya, Jawa Timur',
    action: null
  },
  {
    icon: Phone,
    title: 'Telepon / WhatsApp',
    content: '0878-6550-2146 (Pak Adi)',
    action: { type: 'tel', href: 'tel:087865502146' }
  },
  {
    icon: Phone,
    title: 'Telepon / WhatsApp',
    content: '0877-5973-1023 (Pak Nardi)',
    action: { type: 'tel', href: 'tel:087759731023' }
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'Hariteknik1976@gmail.com',
    action: { type: 'email', href: 'mailto:Hariteknik1976@gmail.com' }
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    content: 'Senin - Minggu: 08:00 - 17:00 WIB',
    action: null
  }
]

export default function KontakContent() {
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
              Kontak
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hubungi Jasa Servis AC & Elektronik Surabaya
            </h1>
            <p className="text-lg text-gray-300">
              Butuh jasa servis AC, kulkas, mesin cuci, atau instalasi listrik di Surabaya? 
              Hubungi CV. Arsa Prima Solution untuk konsultasi gratis dan layanan cepat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
                Informasi Kontak
              </h2>
              <p className="text-gray-600 mb-8">
                Kami siap melayani Anda untuk kebutuhan service elektronik dan instalasi listrik. 
                Hubungi kami melalui salah satu kontak berikut:
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action.href}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Cara Tercepat Menghubungi Kami</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Untuk respon paling cepat, hubungi kami via WhatsApp. Tim kami akan 
                  segera merespon pesan Anda.
                </p>
                <WhatsAppButton 
                  text="Chat via WhatsApp"
                  size="lg"
                  className="!bg-white !text-green-600 hover:!bg-gray-100 w-full sm:w-auto shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Kirim Pesan
                </h2>
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || ''
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || ''
                  const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value || ''
                  const address = (form.elements.namedItem('address') as HTMLInputElement)?.value || ''
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
                  const msg = `Halo CV. Arsa Prima Solution,\n\nNama: ${name}\nNo HP: ${phone}\nLayanan: ${service}\nAlamat: ${address}\nPesan: ${message}`
                  window.open(`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
                  form.reset()
                }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        No. WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Layanan
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="Service AC">Service AC</option>
                      <option value="Service Mesin Cuci">Service Mesin Cuci</option>
                      <option value="Service Kulkas">Service Kulkas</option>
                      <option value="Service Freezer">Service Freezer</option>
                      <option value="Service Showcase">Service Showcase</option>
                      <option value="Service Chiller">Service Chiller</option>
                      <option value="Instalasi Listrik">Instalasi Listrik</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="Alamat lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan / Keluhan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Jelaskan kebutuhan atau keluhan Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4"
                  >
                    Kirim via WhatsApp
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Atau langsung hubungi kami via{' '}
                    <a 
                      href={`https://wa.me/${getWhatsAppNumber()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-gray-600">
              Kunjungi kantor kami di Surabaya atau hubungi untuk layanan ke lokasi Anda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.541856697665!2d112.71500!3d-7.26540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47b%3A0x3027a76e352be40!2sSurabaya%2C+Kota+SBY%2C+Jawa+Timur!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              sandbox="allow-scripts allow-same-origin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi CV. Arsa Prima Solution"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
