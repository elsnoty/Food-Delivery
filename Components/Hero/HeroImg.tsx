"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HerImg from '../../public/HeroImg.jpeg';
import gsap from 'gsap'; // Import GSAP

const HeroImg = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowImage(true);
    }, 1000); 

    return () => clearTimeout(delay); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    if (showImage) {
      // GSAP animation to fade in the image
      gsap.fromTo(
        '#hero-img',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, [showImage]);

  return (
    <div className='max-w-[560px] h-full -rotate-3 z-[1]'>
      {showImage && ( // Ensure image is shown after delay
        <Image 
          id="hero-img"
          src={HerImg} 
          alt='Heroimg' 
          className='rounded-lg w-full' 
          priority 
        />
      )}
    </div>
  );
};

export default HeroImg;


