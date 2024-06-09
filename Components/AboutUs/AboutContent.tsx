'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Btn from '../btn';
import Styles from "../NavBar/NavBar.module.css";

const AboutContent = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = aboutRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power4.out" });
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
    <div ref={aboutRef} className='text-grayCustom md:max-w-[450px]'>
      <h1 className='font-bold text-4xl text-[#161412] py-5'>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae
    velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
      <p className='pt-12'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet 
        risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus
        donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris.</p>
      <Btn 
        className={`bg-[#ea580c] text-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] 
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2`}
        text={'About us'} 
      />        
      <Btn 
        className={`bg-[white] text-[#ea580c] font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c]  
        ${Styles.navHoverEff} max-md:w-full my-7 ml-2`}
        text={'Join Our Team'} 
      />
    </div>
  );
};

export default AboutContent;
