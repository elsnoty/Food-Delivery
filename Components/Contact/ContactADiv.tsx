"use client"

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const ContactADiv = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
      const el = contentRef.current;

      const observe = new IntersectionObserver((entries)=>{
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power4.out" });
                  observe.disconnect();
                }
          });
      }, {threshold: 0.1})
      if(el) observe.observe(el);

  return () => {
      observe.disconnect;
  };
  }, [])
  return (
    <div>
      <div className='absolute right-0 bg-orangeCustom lg:top-0 w-[35%] h-full z-[0] max-lg:bottom-0 max-lg:w-full max-lg:h-1/3 max-sm:h-[45%]' ref={contentRef}></div>
    </div>
  )
}

export default ContactADiv