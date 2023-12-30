"use client";
import ActionLoader from '@/components/common/action-loader'
import { useLoaderStore } from '../store/loaderStore';
import React from 'react'
import { twMerge } from 'tailwind-merge'

const MarginWrapper = ({
    children,
    extraClass
}: { children: React.ReactNode, extraClass?: string }) => {
    const { isLoaderEnabled } = useLoaderStore()
    return (
        <>
            {isLoaderEnabled ? <ActionLoader /> : null}
            <div className={twMerge('relative w-5/6 p-4 h-screen mx-auto', extraClass)}>
                {children}
            </div>
        </>
    )
}

export default MarginWrapper