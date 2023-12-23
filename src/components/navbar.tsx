"use client"
import React, { useState } from 'react'
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
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'next/navigation'
import { useLoaderStore } from '@/store/loaderStore'

const Navbar = () => {
  const { user, saveUser } = useUserStore()
  const { enableLoader, disableLoader } = useLoaderStore()
  const router = useRouter()
  
  const [userData, setUserData] = useState<any>({ email: '', password: '' });

  return (
    <div className='bg-gray-100 flex justify-between items-center border-gray-300 border-2 rounded-lg p-3'>
      <p className='font-semibold  text-lg'>Dochat.</p>

      {user ? <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button size={'icon'}>
              <LogIn size={15} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go to Dashboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> :
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
                <Input id="name" onChange={(e) => setUserData({ email: e.target.value })} value={userData.email} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="password" onChange={(e) => setUserData({ password: e.target.value })} type='password' value={userData.password} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => {
                saveUser(userData)
                enableLoader()
                setTimeout(() => {
                  router.push('/dashboard')
                  disableLoader()
                },2000)
              }}>Log in</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>}

    </div >
  )
}

export default Navbar