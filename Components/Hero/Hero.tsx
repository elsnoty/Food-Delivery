import React from 'react'
import HeroTitle from './Title'
import HeroImg from './HeroImg'

const Hero = () => {
  return (
    <>
        <div className='flex justify-between items-center gap-3 px-36 py-5
        max-lg:px-12 relative max-md:px-5 bg-stone-100 max-md:flex-col'>
      <HeroTitle />
      <HeroImg />
    <div className='absolute right-0 bg-orangeCustom w-[30%] h-full z-[0] max-md:bottom-0 max-md:w-full max-md:h-1/3 max-sm:h-[20%]'></div>
    </div>
    </>

  )
}

export default Hero
