import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-[300px] md:w-[500px] lg:w-[600px] border border-black rounded-full flex justify-center items-center'>
      
    
      <input className="w-full h-7 md:h-full outline-none pt-3 pb-3 pl-2 text-sm" type='text'></input>
      <img src='/magnify.svg' className='w-2 h-2 md:w-4 md:h-4 ml-2 mr-2'></img>
      
      
    </div>
  )
}

export default Searchbar