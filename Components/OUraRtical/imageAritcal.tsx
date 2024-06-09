"use client"
import React, { useEffect, useRef } from 'react';
import ar1t from '../../public/art1.jpg';
import ar2t from '../../public/art2.jpeg';
import ar3t from '../../public/art3.jpeg';
import ar4t from '../../public/art4.jpeg';
import ar5t from '../../public/art5.jpeg';
import Image from 'next/image';
import gsap from 'gsap';

const ImageAritcal = () => {
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

    <div className='flex gap-5 overflow-hidden max-lg:flex-col' ref={contentRef}>
      <div className='bg-white rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 max-w-[781px]'>
        <div className=''>
          <Image src={ar1t} alt='ar1t' className='rounded-t-xl'/>
          <p className='pl-3 text-grayCustom pt-3'>September 1, 2022</p>
          <h1 className='p-3 font-bold'>The Secret Trick To Prepare a Perfect Burger</h1>
          <p className='pl-3 text-grayCustom py-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna 
            adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-7'>

        <div className='flex gap-3 max-sm:flex-col'>
          <div className='bg-white rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <div>
              <Image src={ar2t} alt='ar2t' className='rounded-t-xl' />
              <p className='pl-3 text-grayCustom pt-3'>September 1, 2022</p>
              <h1 className='p-3 font-bold'>How to prepare the perfect french fries in an air fryer</h1>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <div>
              <Image src={ar3t} alt='ar3t' className='rounded-t-xl' />
              <p className='pl-3 text-grayCustom pt-3'>September 1, 2022</p>
              <h1 className='p-3 font-bold'>How to prepare delicious chicken tenders</h1>
            </div>
          </div>
        </div>

        <div className='flex gap-3 max-sm:flex-col'>

          <div className='bg-white rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <div>
              <Image src={ar4t} alt='ar4t' className='rounded-t-xl' />
              <p className='pl-3 text-grayCustom pt-3'>September 1, 2022</p>
              <h1 className='p-3 font-bold'>7 delicious cheesecake recipes you can prepare</h1>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <div>
              <Image src={ar5t} alt='ar5t' className='rounded-t-xl' />
              <p className='pl-3 text-grayCustom pt-3'>September 1, 2022</p>
              <h1 className='p-3 font-bold'>5 great burger restaurants you should visit in LA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageAritcal;
