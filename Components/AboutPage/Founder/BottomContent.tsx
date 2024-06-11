"use client"
import Btn from '@/Components/btn'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Styles from "../../NavBar/NavBar.module.css"
import founde2r from "../../../public/founder2.jpeg"
import gsap from 'gsap'
import Link from 'next/link'
const BottomContent = () => {
  const founderref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = founderref.current;
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(el, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power4.out" });
              observer.disconnect();
            }
          });
        }, { threshold: 0.1 });
    
        if(el) observer.observe(el);
    
        return () => {
          observer.disconnect;
        };
      }, []);

  return (
    <div className='flex justify-center items-center gap-5 max-md:flex-col' ref={founderref}>
        <div className='flex flex-col gap-y-7'>
        <h1 className='font-bold text-4xl text-black'>How our founder met</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
        occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliquaquis nostrud exercitation.</p>
        <Link href="/Contact">
        <Btn text='Contact us' className={`bg-[#ff7629] text-white font-bold p-4 rounded-full md:w-[160px] shadow-sm shadow-[#ea580c] navHoverEff ${Styles.navHoverEff}
        max-md:w-full`}/>
        </Link>
      </div>
      <div>
        <Image
        src={founde2r}
        alt='founde2r'
        className='rounded-lg'/>
      </div>
    </div>
  )
}

export default BottomContent
