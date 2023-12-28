import ChipRow from '@/components/common/chip-row'
import React from 'react'

const Requirements = ({ requirements }: { requirements: any }) => {
    return (
        <div className='my-3'>
            <p className='text-sm font-semibold my-1'>Requirements</p>
            <p className='text-sm '>{requirements.projectIdea}</p>
            <ChipRow values={requirements.skillsNeeded} />
        </div>
    )
}

export default Requirements