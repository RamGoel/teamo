import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Navbar from '@/components/navbar';
import FilesHeader from './components/files-header';
import FileCard from './components/file-card';

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <Navbar />
      <FilesHeader />
      <div className='flex items-center justify-between flex-wrap'>
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </div>
  )
}

export default DashboardPage