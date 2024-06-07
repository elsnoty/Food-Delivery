import React from 'react'
import InspireImg from './InspireImg'
import InspireCont from './InspireCont'

const InspireSec = () => {
  return (
    <div className='flex justify-center gap-10 bg-orangeCustom items-center px-28 
    max-lg:px-10 max-md:px-5 max-md:flex-col max-md:py-10'>
      <InspireCont />
      <InspireImg/>
    </div>
  )
}

export default InspireSec
