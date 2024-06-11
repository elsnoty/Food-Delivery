import React from 'react'
import MenuProducts from './MenuProducts'

const Menu = () => {
  return (
    <div className='shadow-inner px-36 py-24 max-lg:px-10 max-md:px-7'>
      <div>
        <h1 className='font-bold text-4xl'>Our menu</h1>
        <p className='text-grayCustom py-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum dolor.</p>
      </div>
      <MenuProducts />
    </div>
  )
}

export default Menu
