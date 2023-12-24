import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default DashboardPage