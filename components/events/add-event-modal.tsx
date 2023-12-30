"use client";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import React from 'react'
import { DialogHeader } from '../ui/dialog'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'

const AddEventModal = () => {
  return (
          <Dialog>
              <DialogTrigger>
                  <Button className=''>
                      <Plus size={15} className='mr-1' />  Add New Event
                  </Button>
              </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                      <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                      </DialogDescription>
                  </DialogHeader>
              </DialogContent>
          </Dialog>
  )
}

export default AddEventModal