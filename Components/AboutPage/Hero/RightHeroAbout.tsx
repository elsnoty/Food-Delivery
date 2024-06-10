import Image from 'next/image'
import React from 'react'
import aboutH from "../../../public/insta1.jpeg"
const RightHeroAbout = () => {
  return (
    <div>
      <Image
      src={aboutH}
      alt='AboutH'
      className='rounded-xl max-lg:h-[560px] sm:min-w-[260px] max-md:w-[700px] max-md:h-full'/>
    </div>
  )
}

export default RightHeroAbout
