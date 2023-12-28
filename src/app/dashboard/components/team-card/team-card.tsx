import React from 'react'
import Requirements from './requirements';
import AboutTeam from './about-team';
import AboutEvent from './about-event';
import { fetchTeams } from '../../dashboard.actions';


const TeamCard = async () => {
    const fileObject = await fetchTeams();

    if (!fileObject) {
        return <></>
    }
    return (
        <div className='flex items-center justify-start'>
            {
                fileObject?.map((item: any, index: number) => {
                    return <div key={index} className='border-2 p-4 w-full lg:w-1/3 md:w-1/2 mr-3 my-3 rounded-lg'>
                        <AboutTeam aboutTeam={item.aboutTeam} />
                        <AboutEvent event={item.aboutEvent} />
                        <Requirements requirements={item.aboutProject} />
                    </div>
                })
            }
        </div>
    )
}

export default TeamCard