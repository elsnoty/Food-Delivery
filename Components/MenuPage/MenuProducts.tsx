"use client"
import React, { useState } from 'react';
import pr1o from "../../public/pro1.jpeg";
import pr2o from "../../public/pro2.jpeg";
import pr3o from "../../public/pro3.jpeg";
import pr4o from "../../public/pro4.jpeg";
import pr5o from "../../public/pro5.jpeg";
import pr6o from "../../public/pro6.jpeg";
import pr7o from "../../public/pro7.jpeg";
import pr8o from "../../public/pro8.jpeg";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface Products {
    photo: StaticImageData;
    name: string;
    details: string;
    price: number;
    id: number;
    category?: string;
}

const MenuProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
        ? ProductsFood.filter(product => product.category === selectedCategory)
        : ProductsFood;

        const handleCategoryClick = (category: string | null) => {
            setSelectedCategory(category);
        };
    return (
        <div className='py-10'>
            <div className='flex gap-4 justify-center flex-wrap'>
                <button
                    className={`shadow-lg transition-all duration-300 rounded-full p-3 ${selectedCategory === null ? 'bg-orangeCustom' : 'bg-white'}`}
                    onClick={() => handleCategoryClick(null)}
                >
                    All
                </button>
                <button
                    className={`shadow-lg transition-all duration-300 rounded-full p-3 ${selectedCategory === "Breakfast" ? 'bg-orangeCustom' : 'bg-white'}`}
                    onClick={() => handleCategoryClick("Breakfast")}
                >
                    Breakfast
                </button>
                <button
                    className={`shadow-lg transition-all duration-300 rounded-full p-3 ${selectedCategory === "Main Dish" ? 'bg-orangeCustom' : 'bg-white'}`}
                    onClick={() => handleCategoryClick("Main Dish")}
                >
                    Main Dishes
                </button>
                <button
                    className={`shadow-lg transition-all duration-300 rounded-full p-3 ${selectedCategory === "Drinks" ? 'bg-orangeCustom' : 'bg-white'}`}
                    onClick={() => handleCategoryClick("Drinks")}
                >
                    Drinks
                </button>
                <button
                    className={`shadow-lg transition-all duration-300 rounded-full p-3 ${selectedCategory === "Dessert" ? 'bg-orangeCustom' : 'bg-white'}`}
                    onClick={() => handleCategoryClick("Dessert")}
                >
                    Desserts
                </button>
            </div>
            <div className='grid grid-cols-4 gap-5 pt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {filteredProducts.map((pro) => (
                    <Link
                        href={{
                            pathname: `/Menu/${pro.id}`,
                            query: {
                                id:pro.id,
                                name: pro.name,
                                details: pro.details,
                                price: pro.price.toString(),
                                photo: pro.photo.src,
                            },
                        }}
                        key={pro.id}
                    >
                        <div className={`cursor-pointer group hover:-translate-y-3 transition-all duration-300 relative flex
                            flex-col items-center text-center gap-5`}>
                            <Image
                                src={pro.photo}
                                alt={pro.name}
                                className='rounded-xl'
                            />
                            <h1 className='font-bold text-3xl'>{pro.name}</h1>
                            <p className='text-grayCustom'>{pro.details}</p>
                            <span className='absolute right-0 top-0 bg-white rounded-full text-grayCustom p-2
                            group-hover:bg-black group-hover:text-white '>${pro.price}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuProducts;

export const ProductsFood: Products[] = [
    {
        id: 1,
        photo: pr1o,
        name: "Classic Burger",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 10.99,
        category: "Main Dish",
    },
    {
        id: 2,
        photo: pr2o,
        name: "Chocolate Milkshake",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 6.99,
        category: "Drinks",
    },
    {
        id: 3,
        photo: pr3o,
        name: "Classic Fries",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 5.99,
        category: "Breakfast",
    },
    {
        id: 4,
        photo: pr4o,
        name: "Pancakes",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 8.99,
        category: "Breakfast",
    },
    {
        id: 5,
        photo: pr5o,
        name: "Ice Cream",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 3.99,
        category: "Dessert",
    },
    {
        id: 6,
        photo: pr6o,
        name: "Chicken Burger",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 10,
        category: "Main Dish",
    },
    {
        id: 7,
        photo: pr7o,
        name: "Egg Toast",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 7.99,
        category: "Breakfast",
    },
    {
        id: 8,
        photo: pr8o,
        name: "Regular Soda",
        details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit",
        price: 1.99,
        category: "Drinks",
    },
];
