import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'
import TeamCard from '../teams/team-card'
import { Loader2 } from 'lucide-react';
import { fetchEvents, fetchTeams } from '../../app/dashboard/dashboard.actions';
import ScreenLoader from '@/components/common/screen-loader';
import EventCard from '../events/event-card';
import { Button } from '@/components/ui/button';
import EventHeader from '../events/event-header';

const DashboardTabs = async () => {
  const teams = await fetchTeams();
  const events = await fetchEvents();

  if (!teams || !events) {
    return <ScreenLoader />
  }
  return (
    <div className='p-3 mt-5 -ml-3'>
      <Tabs defaultValue="team" className="w-full">
        <TabsList className='w-[220px] h-[50px]'>
          <TabsTrigger className='w-[100px] h-[35px]' value="team">Teams</TabsTrigger>
          <TabsTrigger className='w-[100px] h-[35px]' value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <div className='flex items-center justify-start'>
            {
              teams.map((item: any, index: number) => <TeamCard key={index} data={item} />)
            }
          </div>

        </TabsContent>
        <TabsContent value="events">
          <EventHeader />
          <div className='flex items-center justify-start'>
            {
              events.map((item: any, index: number) => <EventCard key={index} event={item} />)
            }
          </div>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default DashboardTabs