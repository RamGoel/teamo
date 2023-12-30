import ChipRow from '@/components/common/chip-row'
import React from 'react'

const Requirements = ({ data }: { data: any }) => {
    return (
        <div className='my-3'>
            <p className='text-sm font-semibold my-1'>Requirements</p>
            <p className='text-sm '>Our Idea : {data.projectIdea}</p>
            <ChipRow values={data.skillsNeeded.split(',')} />
        </div>
    )
}

export default Requirements