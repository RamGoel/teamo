import ChipRow from '@/components/chip-row'
import moment from 'moment'
import React from 'react'

const AboutEvent = ({ event }: { event: any }) => {
    return (
        <div className='my-3'>
            <p className='text-sm font-semibold my-1'>About Event</p>
            <div className='flex items-center justify-between'>
                <p className='text-xs font-semibold'>{event.eventName}</p>
                <p className='text-xs font-semibold'>{event.eventLocation} ({moment(event.eventDate).format('DD MMM, YYYY')})</p>
            </div>
        </div>
    )
}

export default AboutEvent