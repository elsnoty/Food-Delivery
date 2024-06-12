"use client"
import React, { useState } from 'react';
import Cart from './cart';

const CartToggle = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };
  
  return (
    <div>
      <Cart isOpen={isCartOpen} />
    </div>
  );
};

export default CartToggle;
