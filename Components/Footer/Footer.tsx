import Image from 'next/image'
import React from 'react'
import logo from "../../public/Logo.svg"
import FooterSocial from './FooterSocial'
import FooterLink from './FooterLink'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='grid grid-cols-3 gap-5 text-grayCustom px-28 max-lg:px-10 max-md:px-5 py-14'>
        <div className='max-md:col-span-3'>
        <Image
        src={logo}
        alt='Logo'
        className='cursor-pointer hover:scale-105 transition-all duration-300'/>
        <p className='py-2 max-w-[28rem]'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
        <FooterSocial />
        </div>
        <div className='flex flex-col text-grayCustom'>
            <h1 className='font-bold text-3xl text-black'>Pages</h1>
            <Link href="/"><FooterLink text={'Home'} /></Link>
            <Link href="/About"><FooterLink text={'About'} /></Link>
            <Link href="/Menu"><FooterLink text={'Menu'} /></Link>
            <Link href="/"><FooterLink text={'Blog'} /></Link>
            <Link href="/Menu"><FooterLink text={'Delivery'} /></Link>
            <Link href="/Contact"><FooterLink text={'Contact'} /></Link>
        </div>
        <div className='flex flex-col text-grayCustom'>
            <h1 className='font-bold text-3xl text-black'>Utility pages</h1>
            <FooterLink text={'Start here'} />
            <FooterLink text={'Styleguide'} />
            <FooterLink text={'Password Protected'} />
            <FooterLink text={'404 Not Found'} />
            <FooterLink text={'Licenses'} />
            <FooterLink text={'Changelog'} />
        </div>
    </footer>
  )
}

export default Footer
