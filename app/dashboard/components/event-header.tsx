"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

const EventHeader = () => {
    const router=useRouter()
    return (
        <div className='flex items-center justify-end'>
            <Button className='' onClick={()=>router.push('/add-event')}>
                <Plus size={15} className='mr-1' />  Add New Event
            </Button>
        </div>
    )
}

export default EventHeader