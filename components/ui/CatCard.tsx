import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from 'react-icons/ri'
import { CatCardProps } from '@/lib/props'
import { IoSearch } from "react-icons/io5";
const CatCard = ({ title, pic ,speech, hasNoImage}: CatCardProps) => {
  return (
    <div className='max-w-[370px] min-h-[100px] rounded-md shadow-lg [box-shadow:0_0_8px_2px_rgba(128,128,128,.20)] py-4 px-4 md:px-8 gap-2 md:gap-16 flex items-center justify-between bg-white '>
        <div className='flex items-center gap-4'>
          {
            hasNoImage ? (
              <IoSearch className='border-1 rounded-sm border-blue-800 size-16 text-blue-800'/>
            ):(
              <div className='relative border-1 rounded-sm border-blue-800 size-16'>
                <Image src={pic} alt="cat" fill objectFit='cover'/>
              </div>
            
            )
          }
        
        <div className='flex flex-col'>
            <h1 className='text-base font-bold'>{title}</h1>
            <h2 className='text-sm text-blue-500 text-nowrap'>{speech}</h2>
        </div>
        </div>
        
        <RiArrowRightSLine size={36} className='h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-blue-950' />
    </div>
  )
}

export default CatCard
