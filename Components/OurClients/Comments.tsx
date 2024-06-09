'use client'

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import stars from '../../public/stars.svg';
import client1 from "../../public/client1.jpg";
import client2 from "../../public/client2.jpg";
import client3 from "../../public/client3.jpg";

interface ClientData {
    star: StaticImageData;
    title: string;
    content: string;
    imageC: StaticImageData;
    name: string;
    location: string;
}

const Comments = () => {
   
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(0);

    useEffect(() => {
        const updateWidths = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const totalWidth = container.scrollWidth;
                const visibleWidth = container.clientWidth;
                setContainerWidth(totalWidth);
                setWrapperWidth(visibleWidth);
            }
        };

        updateWidths();
        window.addEventListener('resize', updateWidths);

        return () => {
            window.removeEventListener('resize', updateWidths);
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <motion.div 
                ref={containerRef} 
                className='flex gap-5 py-14 pl-36 max-sm:pl-3 text-start'
                drag="x"
                dragConstraints={{ right: 0, left: -(containerWidth - wrapperWidth) }}
            >
                {comments.map((comment, index) => (
                    <div 
                        key={index} 
                        className='border-[1px] border-grayCustom rounded-lg p-5 sm:min-w-[450px] max-sm:min-w-[300px] cursor-grab shadow-lg' 
                    >
                        <Image src={comment.star} alt='stars'/>
                        <h2 className='my-3 font-bold text-2xl'>{comment.title}</h2>
                        <p className='text-grayCustom'>{comment.content}</p>
                        <Image src={comment.imageC} alt={comment.name} className='max-w-[64px] max-h-[64px] rounded-full my-4'/>
                        <p className='text-grayCustom'>{comment.name}</p>
                        <p>{comment.location}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Comments;

const comments: ClientData[] = [
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client1,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client2,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client3,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client1,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client2,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
    {
        star: stars,
        title: "The best burgers in LA, period",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        imageC: client3,
        name: "Sophie Moore",
        location: "Los Angeles, CA"
    },
];
