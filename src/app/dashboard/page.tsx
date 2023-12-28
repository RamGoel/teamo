import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Navbar from '@/components/navbar';
import FileCard from './components/team-card';
import DashboardTabs from './components/dashboard-tabs';

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <Navbar />
      <DashboardTabs />
    </div>
  )
}

export default DashboardPage