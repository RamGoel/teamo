"use client";
import NameImage from '@/components/name-image'
import { Button } from '@/components/ui/button'
import { useLoaderStore } from '@/store/loaderStore'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Code, MoreHorizontal, CopyIcon, Trash2Icon, PhoneCallIcon, MailIcon } from 'lucide-react'
import React from 'react'
import ExperienceChip from './experience-chip'

const AboutTeam = ({ aboutTeam }: { aboutTeam: any }) => {
    const { enableLoader } = useLoaderStore();

    return (
        <div className='flex items-center justify-start'>
            <NameImage text={aboutTeam.teamName} size='md' />
            <div className='ml-3 flex-1'>
                <h1>{aboutTeam.teamName}</h1>
                <p className='text-xs '>{aboutTeam.teamMembers.length}/{aboutTeam.totalMemberNeeded} members found</p>
                <ExperienceChip isExperienced={aboutTeam.hackathonExperience} />
            </div>
            <Button onClick={() => enableLoader()} variant={'outline'} size={'icon'}>
                <MailIcon size={15} />
            </Button>

        </div>
    )
}

export default AboutTeam