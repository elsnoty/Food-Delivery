"use client"
import React, { useEffect, useRef } from 'react'
import fb from "../../../public/fbSocial.svg"
import twiter from "../../../public/twisocial.svg"
import tiktok from "../../../public/tiktok.svg"
import insta from "../../../public/instasocial.svg"
import yelp from "../../../public/yelp.svg"
import openTable from "../../../public/opentable.svg"
import Image, { StaticImageData } from 'next/image'
import Btn from '@/Components/btn'
import { ChevronRight, icons } from 'lucide-react'
import gsap from 'gsap'

interface Social {
    photo: StaticImageData,
    name: string,
    message: string,
    btnConfig: {
        text: string;
        className: string;
        icon: React.ReactNode;
    };
}
const SocialData = () => {
    const socialRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = socialRef.current;
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power4.out" });
              observer.disconnect();
            }
          });
        }, { threshold: 0.1 });
    
        if(el) observer.observe(el);
    
        return () => {
          observer.disconnect;
        };
      }, []);

  return (
    <div ref={socialRef} className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 py-8'>
            {data.map((social, index) => (
                <div key={index} className="relative py-7 my-7 shadow-xl rounded-xl gap-y-3 
                flex flex-col items-center text-center group cursor-pointer hover:scale-105 border duration-300 transition-all hover:opacity-70">
                        <Image src={social.photo} alt={social.name}/>
                        <div>
                            <h3 className="font-bold">{social.name}</h3>
                            <p>{social.message}</p>
                        </div>
                    <Btn
                        text={social.btnConfig.text}
                        className={social.btnConfig.className}
                        icon={social.btnConfig.icon}
                    />
                </div>
            ))}
        </div>
  )
}

export default SocialData;

const data: Social[] = [
    {
        photo: fb,
        name: "FaceBook",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
    {
        photo: twiter,
        name: "Twitter",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
    {
        photo: tiktok,
        name: "TikTok",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
    {
        photo: insta,
        name: "Instagram",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
    {
        photo: yelp,
        name: "Yelp",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
    {
        photo: openTable,
        name: "OpenTable",
        message: "Lorem ipsum dolor sit amet consectetur adipisc.",
                    btnConfig: {
                text: "Follow Us",
                className: "relative flex items-center text-black bg-white w-26 justify-center gap-2 py-2 rounded-md hover:scale-90 transition-transform duration-200",
                icon: <ChevronRight className='group-hover:translate-x-3 transition-transform'/>,
            },
    },
]
