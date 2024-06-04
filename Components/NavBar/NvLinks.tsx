import Link from 'next/link'
import React from 'react'
import Styles from "./NavBar.module.css"
const NvLinks = () => {
  return (
    <div className='flex gap-3 max-lg:flex-col'>
      <Link href="/">
      <p className={`${Styles.linksHover}`}>home</p>
      </Link>
      <Link href="/About">
      <p className={`${Styles.linksHover}`}>About</p>
      </Link>
      <Link href="/Menu">
      <p className={`${Styles.linksHover}`}>Menu</p>
      </Link>
    </div>
  )
}

export default NvLinks
