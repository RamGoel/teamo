"use client";
import ActionLoader from '@/components/common/action-loader'
import { useLoaderStore } from '@/store/loaderStore';
import React from 'react'
import { twMerge } from 'tailwind-merge'
import {Toaster} from 'react-hot-toast'
const MarginWrapper = ({
    children,
    extraClass
}: { children: React.ReactNode, extraClass?: string }) => {
    const { isLoaderEnabled } = useLoaderStore()
    return (
        <>
            {isLoaderEnabled ? <ActionLoader /> : null}
            <Toaster />
            <div className={twMerge('relative w-5/6 p-4 h-screen mx-auto', extraClass)}>
                {children}
            </div>
        </>
    )
}

export default MarginWrapper