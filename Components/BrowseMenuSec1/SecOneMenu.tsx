"use client"
import { ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import cup from "./../../public/cUP.svg"
import burger from "./../../public/bURGERfIL.svg"
import IceTea from "./../../public/iCEtEA.svg"
import dessert from "./../../public/dESSERT.svg"
import Image, { StaticImageData } from 'next/image'
import Btn from '../btn'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
interface Products {
  photo: StaticImageData,
  name: string,
  message: string,
  btnConfig: {
      text: string;
      className: string;
      icon: React.ReactNode;
  };
}

const SecOneMenu = () => {
    const data: Products[] = [
        {
            photo: cup,
            name: "Breakfast",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.",
                        btnConfig: {
                    text: "Follow Us",
                    className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                    icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
                },
        },
        {
            photo: burger,
            name: "Main Dishes",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.",
                        btnConfig: {
                    text: "Follow Us",
                    className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                    icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
                },
        },
        {
            photo: IceTea,
            name: "Drinks",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.",
                        btnConfig: {
                    text: "Follow Us",
                    className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                    icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
                },
                },
        {
            photo: dessert,
            name: "Dessert",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.",
            btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                    icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
                },
        },
      ]
      
    
  return (
      <div className='grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 py-8'>
        {
            data.map((ele, index) =>(
                <Animation item={ele} key={index}/>
        ))
        }
        </div>
  )
}

export default SecOneMenu

export const Animation = (props: {item:Products}) =>{
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
  
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
      <motion.div
      className='group cursor-pointer'
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}>
              <Link href={`/Menu`}>
                <div className="relative py-7 my-7 px-4 shadow-xl rounded-xl gap-y-3 
                flex flex-col items-center text-center group cursor-pointer hover:scale-105 border duration-300 transition-all hover:opacity-70">
                        <Image src={props.item.photo} alt={props.item.name}/>
                        <div>
                            <h3 className="font-bold">{props.item.name}</h3>
                            <p>{props.item.message}</p>
                        </div>
                    <Btn
                        text={props.item.btnConfig.text}
                        className={props.item.btnConfig.className}
                        icon={props.item.btnConfig.icon}
                    />
                </div>
            </Link>
      </motion.div>
  );

}

