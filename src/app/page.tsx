import type { Metadata } from 'next'
import HeroSlider from '@/components/home/HeroSlider'
import SEOLandingLinks from '@/components/home/SEOLandingLinks'
import ServicesSection from '@/components/home/ServicesSection'
import WhyUs from '@/components/home/WhyUs'
import Testimonials from '@/components/home/Testimonials'
import Gallery from '@/components/home/Gallery'
import ServiceArea from '@/components/home/ServiceArea'
import CTASection from '@/components/home/CTASection'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'Servis AC Surabaya, Servis Mesin Cuci, Kulkas & Instalasi Listrik Profesional',
  description: 'CV. Arsa Prima Solution melayani servis AC Surabaya, servis mesin cuci, servis kulkas, dan instalasi listrik panggilan untuk rumah serta usaha. Teknisi berpengalaman, respon cepat, dan bergaransi.',
  path: '/',
  keywords: [
    'servis ac surabaya',
    'jasa servis ac surabaya',
    'teknisi ac surabaya',
    'servis mesin cuci surabaya',
    'servis kulkas surabaya',
    'instalasi listrik surabaya',
    'service ac panggilan surabaya',
    'jasa servis elektronik surabaya',
  ],
})

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SEOLandingLinks />
      <ServicesSection />
      <WhyUs />
      <ServiceArea />
      <Gallery />
      <Testimonials />
      <CTASection />
    </>
  )
}
