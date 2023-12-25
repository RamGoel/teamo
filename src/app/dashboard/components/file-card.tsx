"use client";
import NameImage from '@/components/name-image'
import { Button } from '@/components/ui/button'
import { calcDateDifference } from '@/lib/utils'
import { useLoaderStore } from '@/store/loaderStore';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { CopyIcon, MoreHorizontal, Trash2Icon } from 'lucide-react'
import React from 'react'
let fileObject = {
    name: "ilovemerged.pdf",
    image: null,
    createdAt: new Date(),
}
const FileCard = () => {
    const { enableLoader } = useLoaderStore();
    return (
        <div className='border-2  p-4 w-full lg:w-1/3 md:w-1/2  -mr-[20px] my-3 rounded-lg'>
            <div className='flex items-center justify-start'>
                <NameImage text={fileObject.name} size='md'  />
                <h1 className='ml-3'>{fileObject.name}</h1>
                <p className=' hidden sm:flex ml-auto text-xs text-gray-500'>{calcDateDifference(fileObject.createdAt)}</p>
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none ml-auto sm:ml-2'>
                        <div className=' text-right hover:bg-gray-200 transition-all p-2 rounded-full' >
                            <MoreHorizontal size={15} className='' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='flex items-center justify-between bg-white p-3 rounded-lg shadow-xl border-[.5px]'>
                        <DropdownMenuItem className=' outline-none'>
                            <Button onClick={() => enableLoader()} variant={'outline'} size={'icon'}>
                                <CopyIcon  size={15} />
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='ml-2 outline-none'>
                            <Button variant={'outline'} size={'icon'}>
                                <Trash2Icon color='red' size={15} />
                            </Button>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    )
}

export default FileCard