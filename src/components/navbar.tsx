import React, { useState } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from './ui/button'
import { APP_NAME } from '@/lib/strings';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu';
import { LogOutIcon } from 'lucide-react';

const Navbar = async () => {

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <div className='bg-gray-100 flex justify-between items-center border-gray-300 border-2 rounded-lg p-3'>
      <p className='font-semibold  text-lg'>{APP_NAME}</p>
      <div>
        {!user ? <Button className='mr-2 -mt-2' asChild><RegisterLink>Create Account</RegisterLink></Button> : null}
        {!user ? <Button>
          <LoginLink>
            Log in
          </LoginLink>
        </Button> : null}
        {
          user ? <div className='flex items-center justify-center'>

            <DropdownMenu>
              <DropdownMenuTrigger className='outline-none'>
              <Image
                className='rounded-full ml-2'
                src={user.picture || ""}
                width={40}
                height={40}
                alt='profile-image'
              /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.given_name} {user.family_name}</DropdownMenuLabel>
                <DropdownMenuItem>{user.email}</DropdownMenuItem>
                <DropdownMenuItem><Button className='w-full' size={'sm'}>
                  <LogoutLink>
                    <div className='flex items-center justify-between'>
                      Log out <LogOutIcon className='ml-2' size={12} />
                    </div>
                  </LogoutLink>
                </Button></DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>



          </div> : null
        }
      </div >
    </div>
  )
}

export default Navbar