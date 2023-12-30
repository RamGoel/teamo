import React from 'react'
import { Loader } from 'lucide-react'
import { useLoaderStore } from '../../../store/loaderStore'

const ActionLoader = () => {
    return (
        <div className={`h-screen flex items-center justify-center w-screen z-50 bg-black bg-opacity-25 absolute top-0 left-0`} >
            <div className='absolute z-50 bg-white border-4 border-gray-200 p-3 rounded-sm'>
                <Loader size={40} className='animate-spin text-slate-500 ' />
            </div>
        </div>
    )
}

export default ActionLoader