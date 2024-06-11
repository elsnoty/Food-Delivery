import Link from 'next/link';
import React from 'react';
import Styles from './NavBar.module.css';

const NvLinks = () => {
  return (
    <div className='flex gap-3 max-md:flex-col'>
      <Link href="/" passHref>
        <p className={Styles.linksHover}>Home</p>
      </Link>
      <Link href="/About" passHref>
        <p className={Styles.linksHover}>About</p>
      </Link>
      <Link href="/Menu" passHref>
        <p className={Styles.linksHover}>Menu</p>
      </Link>
      <Link href="/Contact" passHref>
        <p className={Styles.linksHover}>Contact</p>
      </Link>
    </div>
  );
};

export default NvLinks;
