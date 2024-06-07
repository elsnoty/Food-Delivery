import React from 'react'
import HeroTitle from './Title'
import HeroImg from './HeroImg'
import HeroADiv from './HeroADiv'

const Hero = () => {
  return (
    <>
        <div className='flex justify-between items-center gap-3 px-36 py-14
        max-lg:px-12 relative max-md:px-5 shadow-inner max-md:flex-col overflow-hidden '>
      <HeroTitle />
      <HeroImg />
    <HeroADiv/>
    </div>
    </>

  )
}

export default Hero
