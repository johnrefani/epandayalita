import React from 'react'
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className='w-full md:w-[600px] lg:w-[700px] h-10 md:h-12 lg:h-14 shadow-lg [box-shadow:0_0_8px_2px_rgba(178,232,209,0.75)] rounded-full flex items-center px-4 md:px-6 hover:[box-shadow:0_0_12px_4px_rgba(178,232,209,0.4)] transition-all duration-300'>
      <input 
        className="w-full h-full outline-none bg-transparent text-sm md:text-base px-2 md:px-4 placeholder-gray-400"
        type='text'
        placeholder='Search...'
      />
        <IoSearch 
        className='w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-4 flex-shrink-0 hover:scale-110 transition-transform text-green-300'
      />
    </div>
  )
}

export default Searchbar;