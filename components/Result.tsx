import React from 'react'
import ResCard from './ui/ResCard'

const Result = () => {
  return (
    <section className='h-screen'>
      <ResCard/>
      <div className='flex flex-col px-64'>
        <h1 className='text-xl font-bold mb-4
        '>Popular Terms</h1>
        <div className='flex gap-4'>
            <h2 className='rounded-md bg-green-100 py-2.5 px-3.5 shadow-md'>Sledgehammer</h2>
            <h2 className='rounded-md bg-green-100 py-2.5 px-3.5 shadow-md'>Arado</h2>
        </div>
      </div>
    </section>
  )
}

export default Result
