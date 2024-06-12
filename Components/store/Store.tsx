import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';

const Store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
