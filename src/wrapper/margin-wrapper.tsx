import React from 'react'
import { twMerge } from 'tailwind-merge'

const MarginWrapper = ({
    children,
    extraClass
}: { children: React.ReactNode, extraClass?:string  }) => {
    return (
        <div className={twMerge('w-5/6 p-4 h-screen mx-auto', extraClass)}>
            {children}
        </div>
    )
}

export default MarginWrapper