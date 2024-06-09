import React from 'react'
import Btn from '../btn'
import Styles from "../NavBar/NavBar.module.css"
import ImageAritcal from './imageAritcal'

const Artical = () => {
  return (
    <div className='bg-[#fff9f3] px-28 
    max-lg:px-10 max-md:px-5 py-14'>
        <div className='flex justify-between flex-wrap items-center py-10'>
      <h1 className='font-bold text-4xl'>Our articles</h1>
      <Btn className={`bg-[white] text-black font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] 
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2 hover:bg-orangeCustom hover:text-white`} text={'Browse our articles'} />
        </div>
        <ImageAritcal />
    </div>
  )
}

export default Artical
