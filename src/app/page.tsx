import HeroSection from '@/components/hero-section'
import Navbar from '../components/navbar'
import MarginWrapper from '../wrapper/margin-wrapper'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <MarginWrapper >
      <Navbar />
      <HeroSection />
      <Footer />
    </MarginWrapper>
  )
}
