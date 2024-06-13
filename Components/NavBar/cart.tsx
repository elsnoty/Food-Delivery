"use client";
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { X } from 'lucide-react';
import CartProduct from './CartProduct';
import { motion } from 'framer-motion';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const items = useSelector((state: RootState) => state.cart.items);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className='cursor-pointer hover:text-orangeCustom relative' onClick={handleOpen}>
        Cart<span>({items.length})</span>
        <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orangeCustom opacity-75'></span>
        <span className='absolute inline-flex rounded-full h-3 w-3 bg-orangeCustom'></span>
      </div>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={handleClose}
          ></div>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? '0%' : '100%' }}
            transition={{ duration: 0.5 }}
            className='fixed right-0 top-0 bg-white h-full w-[40%] z-[11] p-5 shadow-xl max-xl:w-[60%] max-md:w-full'
          >
            <div className='flex justify-between items-center py-2'>
              <h1 className='font-bold text-3xl'>Your Cart</h1>
              <div>
                <X className='cursor-pointer bg-orangeCustom rounded-full text-white' width={50} height={50} onClick={handleClose} />
              </div>
            </div>
            <hr />
            <CartProduct />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Cart;
