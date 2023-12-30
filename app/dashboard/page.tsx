import React from 'react'
import Navbar from '@/components/common/navbar';
import DashboardTabs from '@/app/dashboard/components/dashboard-tabs';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <DashboardTabs />
    </div>
  )
}

export default DashboardPage