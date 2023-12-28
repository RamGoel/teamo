import { Loader2 } from 'lucide-react'
import React from 'react'

const ScreenLoader = () => {
    return (
        <div className='h-full w-full absolute bg-white flex items-center justify-center top-0 left-0'>
            <Loader2 className='animate-spin' />
        </div>
    )
}

export default ScreenLoader