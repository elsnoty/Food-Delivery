import React from 'react'
import RightHeroAbout from './RightHeroAbout'
import LeftHeroAbout from './LeftHeroAbout'
import ColorDiv from './ColorDiv'
import Aboutcta from './Aboutcta'

const AboutHero = () => {
  return (
    <div className='px-36 py-24 max-lg:px-10 relative max-md:px-5'>
      <div className='flex items-start justify-center gap-5 max-md:flex-col'>
        <LeftHeroAbout />
        <RightHeroAbout />
        <ColorDiv />
      </div>
      <div className='flex justify-center items-center'>
        <Aboutcta />
      </div>
    </div>
  )
}

export default AboutHero
