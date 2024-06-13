"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import gsap from 'gsap';

interface Question {
    id: number;
    question: string;
    answer: string;
}

const questions: Question[] = [
    {
        id: 1,
        question: "What is your opening schedule?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pharetra quis diam imperdiet sed nisi. Turpis non elit mauris est, nisl aliquam dignissim ultricies lorem. In non risus consectetur tellus nulla nec ullamcorper in eu."
    },
    {
        id: 2,
        question: "Do you offer takeout services?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pharetra quis diam imperdiet sed nisi. Turpis non elit mauris est, nisl aliquam dignissim ultricies lorem. In non risus consectetur tellus nulla nec ullamcorper in eu."
    },
    {
        id: 3,
        question: "What safety measures are in place?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pharetra quis diam imperdiet sed nisi. Turpis non elit mauris est, nisl aliquam dignissim ultricies lorem. In non risus consectetur tellus nulla nec ullamcorper in eu."
    },
    {
        id: 4,
        question: "Do you have vegetarian options?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pharetra quis diam imperdiet sed nisi. Turpis non elit mauris est, nisl aliquam dignissim ultricies lorem. In non risus consectetur tellus nulla nec ullamcorper in eu."
    },
    {
        id: 5,
        question: "What are your contact details?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pharetra quis diam imperdiet sed nisi. Turpis non elit mauris est, nisl aliquam dignissim ultricies lorem. In non risus consectetur tellus nulla nec ullamcorper in eu."
    }
];

const SectionQuestions = () => {
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(questions.length).fill(false));

    const handleClick = (index: number) => {
        setOpenStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const el = contentRef.current;
  
        const observe = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(el, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power4.out" });
                    observe.disconnect();
                  }
            });
        }, {threshold: 0.1})
        if(el) observe.observe(el);
  
    return () => {
        observe.disconnect;
    };
    }, [])

    return (
        <div ref={contentRef}>
            {questions.map((item, index) => (
                <div
                    key={item.id}
                    className='bg-white shadow-xl my-10 py-8 px-3 flex gap-3 items-center cursor-pointer rounded-xl hover:scale-105 transition-all duration-300'
                    onClick={() => handleClick(index)}
                >
                    <div className='min-w-[70px]'>
                    {
                        !openStates[index] ? (
                            <Plus className='bg-orangeCustom p-2 rounded-full' size={50} style={{ fontWeight: 'bold'}} />
                        ) : (
                            <Minus className='bg-orangeCustom p-2 rounded-full' size={50} style={{ fontWeight: 'bold'}} />
                        )
                    }
                    </div>
                    <div className='flex-col'>
                        <h1 className='font-bold text-3xl'>{item.question}</h1>
                        <div
                            className={`transition-all duration-500 ease-in-out ${openStates[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                            overflow-hidden`}
                        >
                            <p className='text-grayCustom'>
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectionQuestions;
