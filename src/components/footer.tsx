import { HERO_IMAGE } from '@/lib/strings'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='absolute w-full bottom-0 my-5'>
            <div className=' bg-gray-100 p-4 rounded-lg'>
                <p className='text-center font-semibold'>Made by @RamGoel</p>
            </div>
        </div>
    )
}

export default Footer