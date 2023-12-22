import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className=''>
      <h1 className='text-7xl text-center font-bold mt-20 mb-10 w-2/3 mx-auto'>Read your docs <span className='text-violet-700'>quickly</span> in seconds.</h1>

      <div className='flex items-center justify-center'>
        <Button className='' size={'lg'}>
          Get Started
        </Button>
        <Button variant={'outline'} className='ml-3' size={'lg'}>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection