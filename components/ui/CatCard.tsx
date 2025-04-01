import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from 'react-icons/ri'
import { CatCardProps } from '@/data/props'
const CatCard = ({ title, pic ,speech}: CatCardProps) => {
  return (
    <div className='max-w-[350px] rounded-md shadow-lg py-4 px-8 gap-16 flex items-center justify-between bg-white '>
        <div className='flex items-center gap-4'>
        <Image src={pic} alt="cat" width={64} height={64} className='border-1 border-green-900 '/>
        <div className='flex flex-col'>
            <h1 className='text-base font-bold'>{title}</h1>
            <h2 className='text-sm opacity-60 text-nowrap'>{speech}</h2>
        </div>
        </div>
        
        <RiArrowRightSLine size={36} />
    </div>
  )
}

export default CatCard
