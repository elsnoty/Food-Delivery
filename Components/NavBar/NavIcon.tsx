"use client";
import React, { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import NvLinks from './NvLinks';

export const Hamburger = () => {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth > 768 && active) {
        setActive(false);
      }
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  const isMobile = width <= 768;

  return (
    <>
      {isMobile ? (
        <div className="grid place-content-center bg-orange-500 rounded-full ">
          <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <motion.button
              initial={false}
              animate={active ? 'open' : 'closed'}
              onClick={() => setActive((prev) => !prev)}
              className="relative h-12 w-12 bg-white/0 transition-colors bg-orange rounded-full"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-1 w-10 bg-white"
                style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-1 w-10 bg-white"
                style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-1 w-5 bg-white"
                style={{
                  x: '-50%',
                  y: '50%',
                  bottom: '35%',
                  left: 'calc(50% + 10px)',
                }}
              />
            </motion.button>
          </MotionConfig>
        </div>
      ) : ""}
      {active ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white absolute left-0 -bottom-32 pl-10 w-full z-[10]"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <NvLinks />
        </motion.div>
      ) : ""}
    </>
  );
};

const VARIANTS = {
  top: {
    open: { rotate: '45deg', top: '50%' },
    closed: { rotate: '0deg', top: '35%' },
  },
  middle: {
    open: { rotate: '-45deg' },
    closed: { rotate: '0deg' },
  },
  bottom: {
    open: { rotate: '45deg', bottom: '50%', left: '50%' },
    closed: { rotate: '0deg', bottom: '35%', left: 'calc(50% + 10px)' },
  },
};
