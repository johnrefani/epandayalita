import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-[300px] md:w-[500px] lg:w-[600px] border border-black shadow-lg shadow-green-900/50 rounded-full flex justify-center items-center'>
      
    
      <input className="w-full h-7 md:h-full outline-none pt-3 pb-3 pl-2 text-xs" type='text'></input>
      <img src='/magnify.svg' className='w-3 h-3 md:w-4 md:h-4 ml-4 mr-4 '></img>
      
      
    </div>
  )
}

export default Searchbar