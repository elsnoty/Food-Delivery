import React from 'react'
import HerImg from "../../public/HeroImg.jpeg"
import Image from 'next/image'
const HeroImg = () => {
  return (
    <div className='max-w-[560px] h-full -rotate-3 z-[1]'>
        <Image
        src={HerImg}
        alt='Heroimg'
        className='rounded-lg w-full'/>
    </div>
  )
}

export default HeroImg

