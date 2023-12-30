import React from 'react'
import Navbar from '@/components/common/navbar';
import DashboardTabs from '../../components/dashboard/dashboard-tabs';

const DashboardPage = async () => {
  return (
    <div>
      <Navbar />
      <DashboardTabs />
    </div>
  )
}

export default DashboardPage