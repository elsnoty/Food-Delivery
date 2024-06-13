import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { loadCartFromStorage } from './ProductSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(loadCartFromStorage());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
