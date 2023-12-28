import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'
import TeamCard from './team-card/team-card'

const DashboardTabs = () => {
  return (
    <div className='p-3 mt-5 -ml-3'>
      <Tabs defaultValue="team" className="w-full">
        <TabsList className='w-[220px] h-[50px]'>
          <TabsTrigger className='w-[100px] h-[35px]' value="team">Teams</TabsTrigger>
          <TabsTrigger className='w-[100px] h-[35px]' value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <TeamCard />
        </TabsContent>
        <TabsContent value="events">Change your password here.</TabsContent>
      </Tabs>

    </div>
  )
}

export default DashboardTabs