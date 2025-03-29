import React from 'react'
import Searchbar from './ui/Searchbar'

const Main = () => {
  return (
    <section className='-mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
      <div className="flex w-full h-screen items-center justify-center bg-white">   
        <div className="grid gap-5 text-center">
            <div>
              <p className='text-base md:text-xl text-greens-50'>Magandang Araw!</p>
              <p className='text-base md:text-xl text-green-700'>Anong Salita ang iyong hanap?</p>
            </div>
            
            <div className="flex justify-center">
              <Searchbar/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Main
