import { useSearchParams } from 'next/navigation'; //to work on client
import ProductDetails from "@/Components/ProductDetails/ProductDetails";
import MenuApp from '@/Components/MenuPage/MenuApp';

const ProductId = ({params, searchParams}: any) => {
    const name = searchParams.name;
    const details = searchParams.details;
    const price = searchParams.price;
    const photo = searchParams.photo;

    const product = {
        name: name as string,
        details: details as string,
        price: parseFloat(price as string),
        photo: photo as string,
    };

    return (
        <div>
            <ProductDetails product={product} />
            <MenuApp />
        </div>
    );
}

export default ProductId;
