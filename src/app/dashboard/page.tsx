import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Navbar from '@/components/common/navbar';
import FileCard from '../../components/teams/team-card';
import DashboardTabs from '../../components/dashboard/dashboard-tabs';

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