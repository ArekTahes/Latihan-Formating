'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { getDisplayNumber, generateWhatsAppUrl } from '@/components/whatsapp/whatsappGenerator'

const navigation = [
  { name: 'Beranda', href: '/' },
  { 
    name: 'Layanan', 
    href: '/layanan',
    children: [
      { name: 'Service AC', href: '/layanan/service-ac' },
      { name: 'Service Mesin Cuci', href: '/layanan/service-mesin-cuci' },
      { name: 'Service Kulkas', href: '/layanan/service-kulkas' },
      { name: 'Service Freezer', href: '/layanan/service-freezer' },
      { name: 'Service Showcase', href: '/layanan/service-showcase' },
      { name: 'Service Chiller', href: '/layanan/service-chiller' },
      { name: 'Instalasi Listrik', href: '/layanan/instalasi-listrik' },
    ]
  },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Testimoni', href: '/testimoni' },
  { name: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <span>Melayani Surabaya & Sekitarnya</span>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${getDisplayNumber().replace(/-/g, '')}`}
              className="flex items-center gap-2 hover:text-primary-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {getDisplayNumber()}
            </a>
            <span>|</span>
            <span>Senin - Minggu: 08:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">AP</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-poppins font-bold text-secondary-900 text-lg leading-tight">
                  Arsa Prima
                </div>
                <div className="text-xs text-gray-500">Solution</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl py-2 mt-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                      className="block py-3 text-gray-700 hover:text-primary-600 font-medium border-b border-gray-100"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-gray-600 hover:text-primary-600 text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
