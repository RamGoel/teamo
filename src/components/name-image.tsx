import React from 'react'
let sizeMap: any = {
    "sm": '25px',
    "md": '40px',
    "lg": '60px',
}
const NameImage = ({ text, size='sm' }: { text: string, size?:string }) => {
   
    return (
        <div className={`hidden sm:flex w-[${sizeMap[size]}] h-[${sizeMap[size]}] justify-center flex items-center rounded-full bg-blue-600`}>
            <h1 className='font-bold text-white'>
                {text[0].toUpperCase()}
            </h1>
        </div>
    )
}

export default NameImage