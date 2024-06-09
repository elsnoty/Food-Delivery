import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactData = () => {
  return (
    <div className='text-grayCustom max-w-[450px]'>
      <h1 className='text-4xl font-bold text-black'>Book your table now</h1>
      <p className='my-5 w-3/4'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
      <div className='flex items-center mb-3 hover:text-orangeCustom cursor-pointer'>
        <MapPin size={42} className='mr-2 min-w-10 text-orangeCustom bg-orange-100 rounded-full p-2' />
        <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
      </div>
      <div className='flex items-center mb-3 hover:text-orangeCustom cursor-pointer'>
        <Phone size={42} className='mr-2 text-orangeCustom bg-orange-100 rounded-full my-5 p-2' />
        <p>(414)857-0107</p>
      </div>
      <div className='flex items-center hover:text-orangeCustom cursor-pointer'>
        <Mail size={42} className='mr-2 text-orangeCustom  bg-orange-100 rounded-full p-2' />
        <p>losangeles@restaurantex.com</p>
      </div>
    </div>
  )
}

export default ContactData
