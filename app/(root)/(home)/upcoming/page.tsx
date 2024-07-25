import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='size-full flex flex-col text-white gap-10'>
    <h1 className='text-3xl font-bold'>Upcoming</h1>

    <CallList type="upcoming"></CallList>

  </section>
  )
}

export default Upcoming