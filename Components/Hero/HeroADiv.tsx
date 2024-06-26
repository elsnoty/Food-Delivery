"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const HeroADiv = () => {
    const navRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(navRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  
    }, []);
  return (
    <div>
      <div className='absolute right-0 bg-orangeCustom md:top-0 w-[35%] h-full z-[0] max-md:bottom-0 max-md:w-full max-md:h-1/3 max-sm:h-[20%]' ref={navRef}></div>
    </div>
  )
}

export default HeroADiv
