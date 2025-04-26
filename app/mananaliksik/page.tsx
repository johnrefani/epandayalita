import { Footer, Header, InfoCard } from '@/lib/imports'
import React from 'react'

const page = () => {
  return (
    <main>
    <Header/>
    <div className='py-20 mt-20'>
        <InfoCard/>
    </div>
    <Footer/>
    </main>
  )
}

export default page