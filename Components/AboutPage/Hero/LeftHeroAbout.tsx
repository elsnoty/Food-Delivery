import Image from 'next/image'
import React from 'react'
import aboutH from "../../../public/aboutHero.jpeg"
const LeftHeroAbout = () => {
  return (
    <div className='flex-coltext-grayCustom'>
      <h1 className='text-black font-bold text-4xl '>Our story started back in <span className='text-orangeCustom'>1984</span>.</h1>
      <p className="py-8 max-w-[30rem]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
    occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit</p>
    <Image
    src={aboutH}
    alt='AboutH'
    className='rounded-lg w-[670px]'/> 
    </div>
  )
}

export default LeftHeroAbout
