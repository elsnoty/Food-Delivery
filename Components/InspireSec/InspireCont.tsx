"use client"
import React, { useEffect, useRef } from 'react'
import Btn from '../btn'
import Styles from "../NavBar/NavBar.module.css"
import gsap from 'gsap'
const InspireCont = () => {
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
    <div className='text-white' ref={contentRef}>
      <div className='w-[150px] h-[2px] bg-white my-5'></div>
      <h1 className='font-bold text-4xl pb-4'>Taste the most delicious burger in Los Angeles, CA</h1>
      <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
      <div className='flex flex-wrap'>
        <Btn className={`bg-[white] text-black font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] 
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2 ${Styles.linksHover}`} text={'Order Online'} />
        <Btn className={`bg-transparent text-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] border border-white
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2 hover:bg-black`} text={'Book a Table'} />
      </div>
    </div>
  )
}

export default InspireCont
