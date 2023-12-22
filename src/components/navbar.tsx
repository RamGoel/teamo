import React from 'react'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Navbar = () => {
  return (
    <div className='bg-gray-100 flex justify-between items-center border-gray-300 border-2 rounded-lg p-3'>
      <p className='font-semibold  text-lg'>Dochat.</p>

      <Dialog>
        <DialogTrigger>
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
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
            <DialogDescription>
              Please enter your email and password. Press Log in when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input id="name" value="" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type='password' value="" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Log in</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div >
  )
}

export default Navbar