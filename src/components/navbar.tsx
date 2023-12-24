"use client"
import React, { useState } from 'react'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useUserStore } from '@/store/userStore'

const Navbar = () => {
  const { user } = useUserStore()

  return (
    <div className='bg-gray-100 flex justify-between items-center border-gray-300 border-2 rounded-lg p-3'>
      <p className='font-semibold  text-lg'>Dochat.</p>
      <div>
        {!user ? <Button className='mr-2 -mt-2' asChild><RegisterLink>Create Account</RegisterLink></Button> : null}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button>
                <LoginLink>
                  Log in
                </LoginLink>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to Dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div >
    </div>
  )
}

export default Navbar