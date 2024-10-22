import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const headingFont = localFont({
  src: "../fonts/ChunkFive-Regular.otf"
})

export const logo = () => {
  return (
    <Link href="/">
        <div className='hover:opacity-75 transition items-center
        gap-x-2 hidden md:flex'>
        <Image 
        src='/logo.svg' 
        alt='Logo'
        height={30}
        width={30}>
        </Image>
    <p className={cn('text-lg text-neutral-700 pb-1',
     headingFont.className )}>
    SyncTask
    </p>
        </div>
    </Link>
)
}
