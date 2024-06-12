import Link from 'next/link'
import React from 'react'
import Styles from "./NavBar.module.css"
const NavBtns = () => {
  return (
    <div className='flex gap-5 max-md:flex-col'>
    <Link href="/Menu">
      <button className={`bg-white p-3 rounded-full shadow-lg hover:bg-orangeCustom hover:text-white navHoverEff ${Styles.navHoverEff} max-md:w-full` }>Order Online</button>
    </Link>
    <Link href="/Contact">
      <button className={`bg-orangeCustom text-white font-bold p-3 rounded-full shadow-sm shadow-orangecbg-orangeCustom navHoverEff ${Styles.navHoverEff} max-md:w-full`}>Resrevate</button>
    </Link>
    </div>
  )
}
export default NavBtns
