import React from 'react'
import AboutEvent from './about-event'

const EventCard = ({event}:{event:any}) => {
    return (
        <div className='border-2 p-4 w-full lg:w-1/3 md:w-1/2 mr-3 my-3 rounded-lg'>
            <AboutEvent event={event} />
        </div>
    )
}

export default EventCard