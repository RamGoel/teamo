"use client";
import NameImage from '@/components/common/name-image'
import { Button } from '@/components/ui/button'
import { useLoaderStore } from '@/store/loaderStore'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Code, MoreHorizontal, CopyIcon, Trash2Icon, PhoneCallIcon, MailIcon } from 'lucide-react'
import React from 'react'
import ExperienceChip from './experience-chip'

const AboutTeam = ({ data }: { data: any }) => {

    return (
        <div className='flex items-center justify-start'>
            <NameImage text={data.teamName} size='md' />
            <div className='ml-3 flex-1'>
                <h1>{data.teamName}</h1>
                <p className='text-xs '>{data.teamMembers}/{data.totalMembersNeeded} members found</p>
                <ExperienceChip isExperienced={data.hackathonExperience} />
            </div>
            <Button onClick={() => {
                window.open(`mailto:${data.leaderEmail}`)
            }} variant={'outline'} size={'icon'}>
                <MailIcon size={15} />
            </Button>

        </div>
    )
}

export default AboutTeam