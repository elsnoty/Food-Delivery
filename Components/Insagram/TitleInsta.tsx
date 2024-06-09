"use client"
import React, { useEffect, useRef } from 'react'
import Btn from '../btn'
import Styles from "../NavBar/NavBar.module.css"
import gsap from 'gsap'

const TitleInsta = () => {
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
    <div className='flex justify-between items-center flex-wrap ' ref={contentRef}>
      <h1 className='font-bold text-4xl'>
      Follow us on Instagram
      </h1>
      <Btn className={`bg-orangeCustom text-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] 
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2`} text='Follw us'/>
    </div>
  )
}

export default TitleInsta
