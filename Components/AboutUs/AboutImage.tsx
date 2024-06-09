"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import About from "../../public/About.jpeg";
import { MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const AboutImage = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const dtaaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            gsap.fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1,delay: 0.3, ease: "power4.out" });
          }
          if (dtaaRef.current) {
            gsap.fromTo(dtaaRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" });
          }
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    if (imageRef.current) observer.observe(imageRef.current);
    if (dtaaRef.current) observer.observe(dtaaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='relative'>
      <div className='relative' ref={imageRef}>
        <Image
          src={About}
          alt='About Us'
          className='rounded-lg md:min-w-[360px] max-sm:min-w-[260px] max-h-[550px]'
          priority
        />
        <div className='sm:hidden max-sm:block'>
          <Dtaa />
        </div>
      </div>
      <div ref={dtaaRef} className='absolute -bottom-10 right-[-7%] p-8 bg-white rounded-lg max-w-[335px] max-sm:hidden'>
        <Dtaa />
      </div>
    </div>
  );
};

export default AboutImage;

const Dtaa = () => {
  return (
    <>
      <h3 className='font-bold text-lg pb-3'>Come and Visit us</h3>
      <div className='flex items-center mb-3'>
        <MapPin className='mr-2 text-orangeCustom min-w-6' />
        <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
      </div>
      <div className='flex items-center mb-3'>
        <Phone size={24} className='mr-2 text-orangeCustom' />
        <p>(414)857-0107</p>
      </div>
      <div className='flex items-center'>
        <Mail size={24} className='mr-2 text-orangeCustom' />
        <p>losangeles@restaurantex.com</p>
      </div>
    </>
  );
};
