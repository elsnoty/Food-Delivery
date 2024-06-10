import Btn from '@/Components/btn'
import Image from 'next/image'
import React from 'react'
import Styles from "../../NavBar/NavBar.module.css"
import founde2r from "../../../public/founder2.jpeg"
const BottomContent = () => {
  return (
    <div className='flex justify-center items-center gap-5 max-md:flex-col'>
        <div className='flex flex-col gap-y-7'>
        <h1 className='font-bold text-4xl text-black'>How our founder met</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
        occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliquaquis nostrud exercitation.</p>
        <Btn text='Contact us' className={`bg-[#ff7629] text-white font-bold p-4 rounded-full md:w-[160px] shadow-sm shadow-[#ea580c] navHoverEff ${Styles.navHoverEff}
        max-md:w-full`}/>
      </div>
      <div>
        <Image
        src={founde2r}
        alt='founde2r'
        className='rounded-lg'/>
      </div>
    </div>
  )
}

export default BottomContent
