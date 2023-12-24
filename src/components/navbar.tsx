import React, { useState } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from './ui/button'
import { APP_NAME } from '@/lib/strings';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

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
          user ? <Button>
            <LogoutLink>
              Log out
            </LogoutLink>
          </Button> : null
        }
      </div >
    </div>
  )
}

export default Navbar