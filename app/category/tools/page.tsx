import Result from '@/components/Result'
import { Footer, Header } from '@/lib/imports'
import React from 'react'

const page = () => {
  return (
    <main className='bg-white'>
        <Header/>
        <Result/>
        <Footer/>
    </main>
  )
}

export default page
