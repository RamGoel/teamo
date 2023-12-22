import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { HERO_IMAGE } from '@/lib/strings'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className=''>
      <h1 className='text-7xl text-center font-bold mt-20 mb-10 w-2/3 mx-auto'>Read your docs <span className='text-violet-700'>quickly</span> in seconds.</h1>
      <p className='text-lg text-center w-1/2 mx-auto mt-5 mb-5'>Dochat helps you chat with your PDF files easily. Just upload a PDF file and get started in less than 1 minute. </p>
      <div className='flex items-center justify-center'>
        <Button asChild className='' size={'lg'}>
          <Link href={'/dashboard'}>Get Started</Link>
        </Button>
        <Button variant={'outline'} className='ml-3' size={'lg'}>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection