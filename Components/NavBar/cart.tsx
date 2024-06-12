"use client"
import { DoorClosed, X } from 'lucide-react'
import React, { useState } from 'react'

const Cart = () => {
const [isOpen, SetOpen] = useState(false)

const handelOpen =()=>{
  SetOpen(!isOpen)
  console.log(isOpen)
}
  return (
    <>
    <div className={`cursor-pointer hover:text-orangeCustom`} onClick={handelOpen}>
      Cart(0)
    </div>
      {
        isOpen ?
        <div className={`fixed right-0 top-0 bg-red-600 h-lvh w-[70%] z-[5] duration-300 transition-all p-5 
          ${ isOpen ? "opacity-100"  : "opacity-0"}`}>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold text-3xl'>Your Cart</h1>
            <div><X className={` cursor-pointer bg-orangeCustom rounded-full`}
            width={50} height={50} onClick={handelOpen}/></div>
            </div>
          </div>
        :
        ""
      }
    </>
  )
}

export default Cart
