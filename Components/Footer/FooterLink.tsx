import React from 'react'

interface FooterLink {
    text: string;
    className ?: string;
  }
const FooterLink = (Props: FooterLink) => {
  return (
    <p className={`${Props.className} py-2 hover:text-orangeCustom duration-300 transition-transform cursor-pointer`}>{Props.text}</p>
  )
}

export default FooterLink
