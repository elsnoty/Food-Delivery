import React from 'react'
import Btn from '../btn'
import Styles from "../NavBar/NavBar.module.css"
import Link from 'next/link'
import Comments from './Comments'

const TiltleClient = () => {
  return (
    <div className='text-center py-14 px-28 
    max-lg:px-10 max-md:px-3'>
      <h1 className='font-bold text-3xl py-3'>What our clients say</h1>
      <p className='text-grayCustom'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
      <Comments />
      <div className='flex flex-wrap justify-center gap-3'>
        <Link href="/Menu">
        <Btn className={`bg-orangeCustom text-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] 
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2`} text={'Order Online'} />
        </Link>
        <Link href="/Contact">
        <Btn className={`bg-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] border border-white
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2 hover:bg-orangeCustom`} text={'Book a Table'} />
        </Link>
      </div>
    </div>
  )
}

export default TiltleClient
