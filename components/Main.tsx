import React from 'react'
import Searchbar from './ui/Searchbar'

const Main = () => {
  return (
    <section id='pangunahingpahina' className="flex h-screen min-h-screen items-center justify-center">
      <div className="w-full max-w-4xl px-4 text-center">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="space-y-1 md:space-y-2">
            <p className="text-2xl md:text-3xl font-semibold">
              Magandang Araw!
            </p>
            <p className="text-2xl md:text-3xl text-blue-700 font-semibold">
              Anong Salita ang iyong hanap?
            </p>
          </div>
          
          <div className="w-full max-w-2xl mx-auto">
            <Searchbar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main;