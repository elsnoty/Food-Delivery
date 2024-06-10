"use client"
import React, { useRef } from 'react';
import tea1m from "../../../public/team1.png";
import tea2m from "../../../public/team2.png";
import tea3m from "../../../public/team3.png";
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TeamInfo {
  photo: StaticImageData;
  username: string;
  position: string;
  personInfo: string;
}

const TeamInfo = () => {
    const team: TeamInfo[] = [
        {
          photo: tea1m,
          username: "John Carter",
          position: "Co-founder and Manager",
          personInfo: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
        },
        {
          photo: tea2m,
          username: "Andy Smith",
          position: "Co-founder and Manager",
          personInfo: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
        },
        {
          photo: tea3m,
          username: "Sophie Moore",
          position: "Head of Staff",
          personInfo: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
        },
      ];

    return(
        <div className='flex gap-5 max-md:flex-col '>
            {
                team.map((value, index) =>(
                    <Animation item={value} key={index}/>
                ))
            }
        </div>
    )
};

export default TeamInfo;

export const Animation = (props: {item:TeamInfo}) =>{
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
          <div className='flex-col flex items-center gap-y-4'>
            <Image src={props.item.photo} alt={props.item.username} width={600} className='rounded-xl hover:scale-105 duration-300 transition-all'/>
            <p className='font-bold text-3xl group-hover:text-orangeCustom'>{props.item.username}</p>
            <p className='text-orangeCustom'>{props.item.position}</p>
            <p className='text-grayCustom text-center'>{props.item.personInfo}</p>
          </div>
      </motion.div>
  );

}
