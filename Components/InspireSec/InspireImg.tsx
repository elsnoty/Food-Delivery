"use client"
import React, { useEffect, useRef } from 'react'
import Burgers from "../../public/section.jpeg"
import Image from 'next/image'
import gsap from 'gsap'
const InspireImg = () => {

  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
      const el = imgRef.current;

      const observe = new IntersectionObserver((entries)=>{
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  gsap.fromTo(el, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power4.out" });
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
    <div ref={imgRef}>
      <Image
      src={Burgers}
      alt='burger'
      className='md:min-h-[600px]'/>
    </div>
  )
}

export default InspireImg
