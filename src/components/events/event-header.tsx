import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const EventHeader = () => {
    return (
        <div className='flex items-center justify-end'>
            <Button className=''>
                <Plus size={15} className='mr-1'/>  Add New Event
            </Button>
        </div>
    )
}

export default EventHeader