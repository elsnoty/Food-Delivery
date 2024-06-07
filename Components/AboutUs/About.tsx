import React from 'react'
import AboutImage from './AboutImage'
import AboutContent from './AboutContent'

const Aboutus = () => {
  return (
    <div className='flex justify-center items-center gap-24 xl:px-32 px-8 pt-14 pb-24 max-md:px-14 max-sm:px-5 bg-[#fff9f3] max-md:flex-col-reverse'>
      <AboutImage/>
      <AboutContent/>
    </div>
  )
}

export default Aboutus;
