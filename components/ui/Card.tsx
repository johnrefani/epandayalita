import React from 'react'

const Card = () => {
  return (
    <div className="bg-green-100 md:bg-white flex flex-col-reverse md:flex-row w-full md:w-xl shadow-none md:shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white p-5 flex items-center justify-center">
            <img src='/magnify.svg' className='w-[200px] h-[200px]'></img>
        </div>
        <div className="bg-green-100 p-6 w-full mt-16 md:mt-0 md:w-3/4 grid gap-2">
            <div className=''>
                <span className='bg-green-900 w-14 h-1 inline-block'></span>
                <p className='text-2xl'>About</p>
            </div>
            <p className="text-gray-700 text-xs text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
        </div>
    </div>
  )
}

export default Card