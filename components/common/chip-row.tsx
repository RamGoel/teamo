import React from 'react'

const ChipRow = ({ values }: { values: string[] }) => {
    return (
        <div className='flex items-center my-1 justify-start flex-wrap'>
            {
                values.map((item: string) => {
                    return <div className='w-fit bg-gray-200 px-3 py-1 mr-1 my-1 rounded-full' key={item}>
                        <p className='text-[10px] mx-0 '>{item}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ChipRow