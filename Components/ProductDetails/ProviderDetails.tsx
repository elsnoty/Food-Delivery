"use client";
import { useSearchParams } from 'next/navigation';
import ProductDetails from './ProductDetails';
import MenuApp from '../MenuPage/MenuApp';

const ProviderDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const details = searchParams.get("details");
  const price = searchParams.get("price");
  const photo = searchParams.get("photo");

  const product = {
    id: id as string,
    name: name as string,
    details: details as string,
    price: parseFloat(price as string),
    photo: photo as string,
  };

  return (
      <>
        <ProductDetails product={product} />
        <MenuApp />
      </>
  );
};

export default ProviderDetails;






// this way work on ssr "use client"
// import { useSearchParams } from 'next/navigation'; //to work on client
// import ProductDetails from './ProductDetails';
// import MenuApp from '../MenuPage/MenuApp';
// import { Provider } from 'react-redux';
// import store from '../store/Store';

// const ProviderDetails = ({params, searchParams}: any) => {
//     const name = searchParams.name;
//     const details = searchParams.details;
//     const price = searchParams.price;
//     const photo = searchParams.photo;

//     const product = {
//         name: name as string,
//         details: details as string,
//         price: parseFloat(price as string),
//         photo: photo as string,
//     };

//     return (
//         <Provider store={store}>
//         <div>
//             <ProductDetails product={product} />
//             <MenuApp />
//         </div>
//         </Provider>
//     );
// }

// export default ProviderDetails;