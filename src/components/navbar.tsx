import React from 'react'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Navbar = () => {
  return (
    <div className='bg-gray-200 flex justify-between items-center border-gray-300 border-2 rounded-lg p-3'>
      <p className='font-semibold  text-lg'>Dochat.</p>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button size={'icon'}>
              <LogIn size={15} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Log into your account</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  )
}

export default Navbar