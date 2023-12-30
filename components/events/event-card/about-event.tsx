"use client";
import NameImage from '@/components/common/name-image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import moment from 'moment'
import React from 'react'
const AboutEvent = ({ event }: { event: any }) => {
    const { eventName, eventLocation, eventDate } = event
    return (
        <div className='flex items-center justify-start'>
            <NameImage text={eventName} size='md' />
            <div className='ml-3 flex-1'>
                <h1>{eventName}</h1>
                <p className='text-xs '>{eventLocation} • {moment(eventDate).format('DD MMM, YYYY')}</p>
            </div>
            <Button onClick={() => { }} variant={'outline'} size={'icon'}>
                <ExternalLink size={15} />
            </Button>
        </div>
    )
}

export default AboutEvent