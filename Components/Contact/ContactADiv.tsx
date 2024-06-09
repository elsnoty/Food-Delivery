"use client"

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const ContactADiv = () => {
    const navRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(navRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  
    }, []);
  return (
    <div>
      <div className='absolute right-0 bg-orangeCustom lg:top-0 w-[35%] h-full z-[0] max-lg:bottom-0 max-lg:w-full max-lg:h-1/3 max-sm:h-[45%]' ref={navRef}></div>
    </div>
  )
}

export default ContactADiv