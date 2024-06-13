import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/Logo.svg';
import Cart from './cart';
import NavBtns from './NavBtns';
import Styles from './NavBar.module.css';
import { Hamburger } from './NavIcon';
import NvLinks from './NvLinks';
import CartToggle from './CartProduct';

const Nav = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
      <div className='flex items-center gap-3'>
        <Link href="/" passHref>
          <Image
            src={Logo}
            alt='Logo'
            width={230}
            height={200}
            className={`cursor-pointer ${Styles.navHoverEff}`}
            placeholder='empty'
          />
        </Link>
        <div className='max-md:hidden'>
          <NvLinks />
        </div>
        <Cart />
      </div>
      <div className='max-lg:hidden'>
        <NavBtns />
      </div>
      <Hamburger />
    </div>
  );
};

export default Nav;
