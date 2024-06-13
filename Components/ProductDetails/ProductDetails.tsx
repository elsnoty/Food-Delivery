"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import Btn from '../btn';
import Styles from "../NavBar/NavBar.module.css";
import { addItem } from '../store/ProductSlice';

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
  const [showMessage, setShowMessage] = useState(false); // State to manage the message display

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    setShowMessage(true); // Set state to true to show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 2000);
  };

  return (
    <div className='px-28 py-5 max-lg:px-5 relative max-md:px-5 shadow-inner'>
      <div className="flex justify-center items-center max-md:flex-col gap-7">
        <div className='flex-col flex gap-y-3 items-start'>
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <p className='text-grayCustom max-w-[500px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur sint occaecat cupidatat non proident.</p>
          <span className="text-xl font-semibold">${product.price}</span>
          <Btn 
            text='Add To Cart' 
            className={`p-4 mt-3 rounded-full text-white font-bold shadow-lg bg-orangeCustom navHoverEff ${Styles.navHoverEff} w-full`}
            onclick={handleAddToCart} // Use onClick instead of onclick
          />
          {showMessage && <p className="text-green-500 mt-2">Product has been added to the cart!</p>}
        </div>
        <Image src={product.photo} alt={product.name} className="rounded-xl" width={450} height={600}/>
      </div>
    </div>
  );
};

export default ProductDetails;
