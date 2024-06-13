"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../store/Store';
import { removeItem, incrementQuantity, decrementQuantity } from '../store/ProductSlice';
import Btn from '../btn';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CartProduct = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className='relative'>
      {items.length === 0 ? (
        <div className='text-center absolute top-[20rem] w-full'>
          <h1 className='font-bold text-3xl'>Your cart is empty.</h1>
          <Link href="/Menu">
            <Btn className='hover:scale-105 duration-300 ease-linear bg-orangeCustom rounded-full p-3 w-full mt-5' text='Order Now...' />
          </Link>
        </div>
      ) : (
        <div>
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className='flex justify-between items-center py-5'
              >
                <div className='flex gap-3'>
                  <Link href={`/Menu`}>
                  <Image src={item.photo} alt={item.name} width={100} height={100} className='rounded-lg cursor-pointer' />
                  </Link>
                  <div className='flex-col flex gap-y-1'>
                    <h1 className='font-bold'>{item.name}</h1>
                    <p>${item.price} x {item.quantity}</p>
                    <Btn onclick={() => handleRemoveItem(item.id)} text='Remove' className={`px-2 bg-red-500 text-white rounded-full 
                      text-2xl w-auto hover:translate-x-2 transition-all duration-300`} />
                  </div>
                </div>
                <div>
                  <Btn onclick={() => handleDecreaseQuantity(item.id)} text='-' 
                  className={`px-3 bg-orangeCustom rounded-full text-2xl w-auto hover:scale-105 duration-200 
                    ease-in-out`} />
                  <span className='mx-2'>{item.quantity}</span>
                  <Btn onclick={() => handleIncreaseQuantity(item.id)} text='+' 
                  className={`px-3 bg-orangeCustom rounded-full text-2xl w-auto hover:scale-105 duration-200 
                    ease-in-out`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <hr />
          <div>
            <h1 className='font-bold pt-7'>Total: ${total.toFixed(2)}</h1>
            <Btn text='Continue To Checkout' 
            className='hover:scale-105 duration-300 ease-linear bg-orangeCustom rounded-full p-3 w-full mt-5' />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
