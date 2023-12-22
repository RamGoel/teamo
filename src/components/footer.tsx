import { HERO_IMAGE } from '@/lib/strings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='absolute w-full bottom-0 my-5'>
            <div className='  p-4 rounded-lg'>
                <p className='text-center font-semibold'>Designed & Developed by <Link className='py-1 hover:text-violet-900 transform-gpu border-b-2' href={'https://ramgoel.me'}>
                    @RamGoel
                </Link></p>
            </div>
        </div>
    )
}

export default Footer