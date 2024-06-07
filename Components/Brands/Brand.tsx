import React from 'react'
import Door from "../../public/Door.svg"
import GruHup from "../../public/GrubHup.svg"
import Post from "../../public/postBrand.svg"
import Rappi from "../../public/Rappi.svg"
import Uber from "../../public/Uber.svg"
import Image from 'next/image'
const Brand = () => {
  return (
    <div className='text-center px-36 py-14
    max-lg:px-12 max-md:px-5'>
      <h3 className='text-2xl font-bold'>Order from your favorite app today!</h3>
      <div className='flex flex-wrap justify-center gap-12 py-9 items-center'>
        <Image 
        src={Door} 
        alt='Door'
        className='cursor-pointer hover:scale-95 transition-all'/>
        <Image 
        src={GruHup} 
        alt='GruHup'
        className='cursor-pointer hover:scale-95 transition-all'/>
        <Image 
        src={Uber} 
        alt='Uber'
        className='cursor-pointer hover:scale-95 transition-all'/>
        <Image 
        src={Rappi} 
        alt='Rappi'
        className='cursor-pointer hover:scale-95 transition-all'/>
        <Image 
        src={Post} 
        alt='Post'
        className='cursor-pointer hover:scale-95 transition-all'/>
      </div>
      <hr />
    </div>
  )
}

export default Brand
