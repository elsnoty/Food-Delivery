import React from 'react'
import facebook from "../../public/facebook.svg"
import twiter from "../../public/twitter.svg"
import instagram from "../../public/instagram.svg"
import youtube from "../../public/youtube.svg"
import Image from 'next/image'
const FooterSocial = () => {
  return (
    <div className='flex gap-5 my-3'>
        <Image 
        src={facebook}
        className='text-white bg-orangeCustom p-2 hover:bg-white transition-all duration-300 cursor-pointer rounded-full min-w-[40px]' 
        alt='facebook'/>
        <Image 
        src={twiter}
        className='text-white bg-orangeCustom p-2 hover:bg-white transition-all duration-300 cursor-pointer rounded-full min-w-[40px]' 
        alt='twiter'/>
        <Image 
        src={instagram}
        className='text-white bg-orangeCustom p-2 hover:bg-white transition-all duration-300 cursor-pointer rounded-full min-w-[40px]' 
        alt='instagram'/>
        <Image 
        src={youtube}
        className='text-white bg-orangeCustom p-2 hover:bg-white transition-all duration-300 cursor-pointer rounded-full min-w-[40px]' 
        alt='youtube'/>
    </div>
  )
}

export default FooterSocial
