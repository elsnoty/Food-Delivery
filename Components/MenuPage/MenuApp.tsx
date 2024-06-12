import React from 'react'
import rappi from "../../public/Rappi.svg"
import uber from "../../public/Uber.svg"
import door from "../../public/Door.svg"
import gruhup from "../../public/GrubHup.svg"
import didi from "../../public/DiDi.svg"
import seamless from "../../public/SeamLess.svg"
import goPuff from "../../public/GoPuff.svg"
import postman from "../../public/postBrand.svg"
import Image from 'next/image'

const MenuApp = () => {
  return (
    <div className='text-center px-36 py-24 max-lg:px-10 max-md:px-7'>
        <div className='py-5'>
      <h1 className='font-bold text-4xl'>Order via app</h1>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat</p>
        </div>
      <div className='grid grid-cols-4 gap-y-6 py-7 gap-x-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        <Image src={rappi} alt='rappi' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={uber} alt='uber' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={door} alt='door' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={gruhup} alt='gruhup' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={didi} alt='didi' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={seamless} alt='seamless' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={goPuff} alt='goPuff' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
        <Image src={postman} alt='postman' className='border shadow-xl rounded-xl p-5 w-[300px] h-[120px] hover:scale-105 duration-300 transition-all cursor-pointer max-sm:w-full'/>
      </div>
      <hr className='w-[95%]'/>
    </div>
  )
}

export default MenuApp
