"use client"
import React, { useEffect, useRef } from 'react';
import Btn from '../btn';
import Styles from "../NavBar/NavBar.module.css"
import gsap from 'gsap';
import Link from 'next/link';

const ContactForm = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
      const el = contentRef.current;

      const observe = new IntersectionObserver((entries)=>{
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  gsap.fromTo(el, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power4.out" });
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
    <div className=" px-7 py-16 shadow-xl border rounded-lg max-md:w-[100%] z-[1] bg-white" ref={contentRef}>
      <form >
        <div className='flex justify-between gap-3 max-md:flex-col'>
        <div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" className="rounded-full w-full px-4 py-2 border border-gray-300 focus:border-orange-500 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Date:</label>
          <input type="date" id="date" name="date" className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-orange-500 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-orange-500 focus:outline-none" />
        </div>
        </div>
        <div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder='(123) 456 - 789' className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-orange-500 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">Location:</label>
          <input type="text" id="location" name="location" placeholder='Ex, Los Angeles' className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-orange-500 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="schedule" className="block mb-2">Schedule:</label>
          <input type="text" id="schedule" name="schedule" placeholder='Ex. 2:00PM' className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-orange-500 focus:outline-none" />
        </div>
        </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="note" className="block mb-2">Add a note:</label>
          <textarea id="note" name="note" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none resize-none" placeholder="Add your note"></textarea>
        </div>
        <Link href="/Contact">
        <Btn className={`bg-orangeCustom text-white font-bold py-5 px-7 rounded-full shadow-sm shadow-[#ea580c] border border-white
        ${Styles.navHoverEff} max-md:w-full mt-7 ml-2 `} text={`Book a Table`}/>
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
