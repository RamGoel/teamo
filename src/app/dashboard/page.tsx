import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Navbar from '@/components/navbar';

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default DashboardPage