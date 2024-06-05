import Link from 'next/link'
import React from 'react'
import Styles from "./NavBar.module.css"
const NavBtns = () => {
  return (
    <div className='flex gap-5 max-md:flex-col'>
    <Link href="/OrderOnline">
      <button className={`bg-white p-4 rounded-full shadow-lg hover:bg-[#ea580c] hover:text-white navHoverEff ${Styles.navHoverEff} max-md:w-full` }>Order Online</button>
    </Link>
    <Link href="/Resrevate">
      <button className={`bg-[#ea580c] text-white font-bold p-4 rounded-full shadow-sm shadow-[#ea580c] navHoverEff ${Styles.navHoverEff} max-md:w-full`}>Resrevate</button>
    </Link>
    </div>
  )
}
export default NavBtns
