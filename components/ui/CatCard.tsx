import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from 'react-icons/ri'
import { CatCardProps } from '@/lib/props'
import { IoSearch } from "react-icons/io5";
const CatCard = ({ title, pic ,speech, hasNoImage}: CatCardProps) => {
  return (
    <div className='max-w-[370px] h-[80px] md:h-[90px] lg:h-[100px] rounded-md shadow-lg [box-shadow:0_0_8px_2px_rgba(128,128,128,.20)] py-4 px-8 gap-16 flex items-center justify-between bg-white '>
        <div className='flex items-center gap-4'>
          {
            hasNoImage ? (
              <IoSearch className='border-1 rounded-sm border-green-800 h-12 w-12 md:h-14 md:w-14 lg:h-16 lgd:w-16 text-green-800'/>
            ):(
              <Image src={pic} alt="cat" width={64} height={64} className='border-1 rounded-sm border-green-800 h-12 w-12 md:h-14 md:w-14 lg:h-16 lgd:w-16 object-cover'/>
            )
          }
        
        <div className='flex flex-col'>
            <h1 className='text-base font-bold'>{title}</h1>
            <h2 className='text-sm opacity-60 text-nowrap'>{speech}</h2>
        </div>
        </div>
        
        <RiArrowRightSLine size={36} className='h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-green-950' />
    </div>
  )
}

export default CatCard
