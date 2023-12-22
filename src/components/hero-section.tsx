import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { HERO_IMAGE } from '@/lib/strings'
const HeroSection = () => {
  return (
    <div className=''>
      <h1 className='text-7xl text-center font-bold mt-20 mb-10 w-2/3 mx-auto'>Read your docs <span className='text-violet-700'>quickly</span> in seconds.</h1>
      <p className='text-lg text-center w-1/2 mx-auto mt-5 mb-5'>Dochat helps you chat with your PDF files easily. Just upload a PDF file and get started in less than 1 minute. </p>
      <div className='flex items-center justify-center'>
        <Button className='' size={'lg'}>
          Get Started
        </Button>
        <Button variant={'outline'} className='ml-3' size={'lg'}>
          Read More
        </Button>
      </div>
      {/* <Image
        width={500}
        height={200}
        className='rounded-lg mx-auto my-10 opacity-10 hover:opacity-80 transition-opacity'
        loading='lazy'
        src={HERO_IMAGE} alt='image' /> */}
    </div>
  )
}

export default HeroSection