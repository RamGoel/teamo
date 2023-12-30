import React from 'react'
import Requirements from './requirements';
import AboutTeam from './about-team';
import AboutEvent from './about-event';


const TeamCard = ({ data }: { data: any }) => {
    return (
        <div className='border-2 p-4 w-full lg:w-1/3 md:w-1/2 mr-3 my-3 rounded-lg'>
            <AboutTeam data={data} />
            <Requirements data={data} />
        </div>
    )
}

export default TeamCard