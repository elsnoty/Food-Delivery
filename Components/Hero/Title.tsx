import React from 'react'
import NavBtns from '../NavBar/NavBtns'

const HeroTitle = () => {
  return (
    <div className='max-w-[470px] pb-10'>
      <h1 className='text-[42px] font-bold'>
      The best place to eat <span className='text-orangeCustom'>burgers in LA.</span>
      </h1>
      <p className='text-gray py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
        vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
        <div className='w-full'>
        <NavBtns />
        </div>
    </div>
  )
}

export default HeroTitle
