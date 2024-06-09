"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import inst1a from "../../public/insta1.jpeg"
import inst2a from "../../public/insta2.jpg"
import inst3a from "../../public/insta3.jpeg"
import inst4a from "../../public/insta4.jpeg"
import inst5a from "../../public/insta5.jpg"
import inst6a from "../../public/insta6.jpg"

const ImageInsta = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.11 1"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <div ref={ref} className='flex justify-center gap-5 py-10 flex-wrap'>
      <motion.div
        className='w-[400px] h-[400px]'
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <Image
          src={inst1a}
          alt='Inst1a'
          className='w-full h-full rounded-lg cursor-pointer'
        />
      </motion.div>
      <motion.div
        className='w-[400px] h-[400px]'
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <Image
          src={inst2a}
          alt='inst2a'
          className='w-full h-full rounded-lg cursor-pointer'
        />
      </motion.div>
      <div className='flex-col gap-3 w-[400px] h-[400px]'>
        <div className='flex gap-5 items-center'>
          <motion.div
            className=' h-[190px] max-sm:min-w-[112px]'
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <Image
              src={inst3a}
              alt='inst3a'
              className='w-full h-full rounded-lg cursor-pointer'
            />
          </motion.div>
          <motion.div
            className=' h-[190px] max-sm:min-w-[112px]'
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <Image
              src={inst4a}
              alt='inst4a'
              className='w-full h-full rounded-lg cursor-pointer'
            />
          </motion.div>
        </div>
        <div className='flex gap-5 pt-3'>
          <motion.div
            className=' h-[190px] max-sm:min-w-[112px]'
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <Image
              src={inst5a}
              alt='inst5a'
              className='w-full h-full rounded-lg cursor-pointer'
            />
          </motion.div>
          <motion.div
            className=' h-[190px] max-sm:min-w-[112px]'
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <Image
              src={inst6a}
              alt='inst6a'
              className='w-full h-full rounded-lg cursor-pointer'
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ImageInsta
