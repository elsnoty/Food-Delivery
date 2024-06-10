import Image from 'next/image'
import React from 'react'
import uber from "../../../public/Uber.svg"
import rappi from "../../../public/Rappi.svg"
import door from "../../../public/Door.svg"
import GrubHup from "../../../public/GrubHup.svg"

const Aboutcta = () => {
  return (
    <div className='flex justify-center items-center py-10 px-5 gap-x-10 max-md:flex-col 
    shadow-xl max-w-[800px] bg-white rounded-lg relative -bottom-40 z-[1]'>
      <h1 className='font-bold pb-3'>
        As seen on:
      </h1>
      <div className='flex items-center justify-center flex-wrap gap-5'>    
        <Image 
          src={uber}
          className='cursor-pointer hover:scale-95 transition-all'
          alt='uber' 
        />
        <Image 
          src={rappi}
          className='cursor-pointer hover:scale-95 transition-all'
          alt='rappi' 
        />
        <Image 
          src={door}
          className='cursor-pointer hover:scale-95 transition-all'
          alt='door' 
        />
        <Image 
          src={GrubHup}
          className='cursor-pointer hover:scale-95 transition-all'
          alt='GrubHup' 
        />
      </div>
    </div>
  )
}

export default Aboutcta
