import HeroSection from '@/components/hero-section'
import Navbar from '../components/navbar'
import MarginWrapper from '../wrapper/margin-wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MarginWrapper >
      <Navbar />
      <HeroSection />
    </MarginWrapper>
  )
}
