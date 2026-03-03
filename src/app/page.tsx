import HeroSlider from '@/components/home/HeroSlider'
import ServicesSection from '@/components/home/ServicesSection'
import WhyUs from '@/components/home/WhyUs'
import Testimonials from '@/components/home/Testimonials'
import Gallery from '@/components/home/Gallery'
import ServiceArea from '@/components/home/ServiceArea'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <WhyUs />
      <ServiceArea />
      <Gallery />
      <Testimonials />
      <CTASection />
    </>
  )
}
