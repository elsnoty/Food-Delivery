"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const ColorDiv = () => {
    const navRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(navRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  
    }, []);

  return (
    <div className='absolute w-3/4 h-1/3 left-0 bottom-0 bg-orangeCustom z-[-1] max-sm:h-1/4' ref={navRef}>
    </div>
  )
}

export default ColorDiv
