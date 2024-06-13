"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import Btn from '../btn';
import Styles from "../NavBar/NavBar.module.css";
import { addItem } from '../store/ProductSlice';
import gsap from 'gsap';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    photo: string;
    quantity?: number;
  };
}

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
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
    <div className='px-28 py-5 max-lg:px-5 relative max-md:px-5 shadow-inner'>
      <div className="flex justify-center items-center max-md:flex-col gap-7">
        <div className='flex-col flex gap-y-3 items-start' ref={dtaaRef}>
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <p className='text-grayCustom max-w-[500px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur sint occaecat cupidatat non proident.</p>
          <span className="text-xl font-semibold">${product.price}</span>
          <Btn 
            text='Add To Cart' 
            className={`p-4 mt-3 rounded-full text-white font-bold shadow-lg bg-orangeCustom navHoverEff ${Styles.navHoverEff} w-full`}
            onclick={handleAddToCart} 
          />
          {showMessage && <p className="text-green-500 mt-2">Product has been added to the cart!</p>}
        </div>
        <div ref={imageRef}>
        <Image src={product.photo} alt={product.name} className="rounded-xl" width={450} height={600}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
