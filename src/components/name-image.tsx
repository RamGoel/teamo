import React from 'react'
let sizeMap: any = {
    "sm": 'min-h-[25px] min-w-[25px]',
    "md": 'min-h-[40px] min-w-[40px]',
    "lg": 'min-h-[60px] min-w-[60px]',
}
const NameImage = ({ text, size='sm' }: { text: string, size?:string }) => {
   
    return (
        <div className={`hidden sm:flex ${sizeMap[size]} justify-center flex items-center rounded-full bg-blue-600`}>
            <h1 className='font-bold text-white'>
                {text[0].toUpperCase()}
            </h1>
        </div>
    )
}

export default NameImage