import React from 'react';
import Image from 'next/image';
import Btn from '../btn';
import Styles from "../NavBar/NavBar.module.css"

interface ProductDetailProps {
    product: {
        name: string;
        price: number;
        photo: string;
    };
}

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
    return (
      <div className='px-28 py-5 max-lg:px-5 relative max-md:px-5 shadow-inner'>
        <div className="flex justify-center items-center max-md:flex-col gap-7">
          <div className='flex-col flex gap-y-3 items-start'>
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <p className='text-grayCustom max-w-[500px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur sint occaecat cupidatat non proident.</p>
            <span className="text-xl font-semibold">${product.price}</span>
            <Btn text='Add To Cart' 
            className={`p-4 mt-3 rounded-full text-white font-bold shadow-lg bg-orangeCustom navHoverEff ${Styles.navHoverEff} w-full`}/>
          </div>
            <Image src={product.photo} alt={product.name} className="rounded-xl" width={450} height={600}/>
        </div>
        </div>
    );
};

export default ProductDetails;
