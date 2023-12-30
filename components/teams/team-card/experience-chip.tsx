import { Baby, Code2, FlagIcon } from 'lucide-react'
import React from 'react'

const ExperienceChip = ({ isExperienced }: { isExperienced: boolean }) => {
    return (
        <div className='w-fit -ml-1 my-1 flex items-center bg-black px-2 py-1  rounded-full'>
            {
                isExperienced
                    ? <><Code2 size={12} color='#fff' /> <p className='font-semibold ml-1 text-[8px] text-white '>Hackathon Experience</p></>
                    : <><FlagIcon size={12} color='#fff' /> <p className='font-semibold ml-1 text-[8px] text-white '>Newbie</p></>
            }

        </div>
    )
}

export default ExperienceChip