import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <section className='size-full flex flex-col text-white gap-10'>
    <h1 className='text-3xl font-bold'>Previous</h1>
    <CallList type="ended"/>
  </section>
  )
}

export default Previous