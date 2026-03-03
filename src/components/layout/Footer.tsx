import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle
} from 'lucide-react'
import { generateWhatsAppUrl } from '@/components/whatsapp/whatsappGenerator'

const services = [
  { name: 'Servis AC Surabaya', href: '/layanan/service-ac' },
  { name: 'Servis Mesin Cuci', href: '/layanan/service-mesin-cuci' },
  { name: 'Servis Kulkas', href: '/layanan/service-kulkas' },
  { name: 'Servis Freezer', href: '/layanan/service-freezer' },
  { name: 'Servis Showcase', href: '/layanan/service-showcase' },
  { name: 'Servis Chiller', href: '/layanan/service-chiller' },
  { name: 'Instalasi Listrik', href: '/layanan/instalasi-listrik' },
]

const quickLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Testimoni', href: '/testimoni' },
  { name: 'Kontak', href: '/kontak' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <div className="font-poppins font-bold text-white text-lg leading-tight">
                  Arsa Prima
                </div>
                <div className="text-sm text-gray-400">Solution</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              CV. Arsa Prima Solution adalah penyedia jasa servis AC, service kulkas, servis mesin cuci, dan 
              instalasi listrik profesional di Surabaya. Teknisi berpengalaman, bergaransi, harga terjangkau.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span>Surabaya, Jawa Timur</span>
              </li>
              <li>
                <a 
                  href="tel:087865502146"
                  className="flex gap-3 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span>0878-6550-2146 (Pak Adi)</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:087759731023"
                  className="flex gap-3 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span>0877-5973-1023 (Pak Nardi)</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>Hariteknik1976@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <div>Senin - Sabtu</div>
                  <div>08:00 - 17:00 WIB</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <h3 className="text-white font-semibold text-lg mb-4">Lokasi Kami</h3>
          <div className="rounded-xl overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8851392726915!2d112.72155!3d-7.2654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc0e9f9f9f9f%3A0x9f9f9f9f9f9f9f9f!2sPetemon%20Kuburan%2C%20Sawahan%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi CV. Arsa Prima Solution"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} CV. Arsa Prima Solution. Hak Cipta Dilindungi.
            </p>
            <p className="text-gray-500 text-sm">
              Jasa Servis AC, Kulkas, Mesin Cuci & Instalasi Listrik Surabaya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
