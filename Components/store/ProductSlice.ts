import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  photo: string;
  quantity: number;
}

interface CartState {
  items: Product[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('total', state.total.toFixed(2));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productIndex = state.items.findIndex(item => item.id === action.payload);
      if (productIndex !== -1) {
        const product = state.items[productIndex];
        state.total -= product.price * product.quantity;
        state.items.splice(productIndex, 1);
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(state.items));
          localStorage.setItem('total', state.total.toFixed(2));
        }
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.quantity++;
        state.total += product.price;
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(state.items));
          localStorage.setItem('total', state.total.toFixed(2));
        }
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
          state.total -= product.price;
        } else {
          const productIndex = state.items.findIndex(item => item.id === action.payload);
          if (productIndex !== -1) {
            state.total -= product.price * product.quantity;
            state.items.splice(productIndex, 1);
          }
        }
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(state.items));
          localStorage.setItem('total', state.total.toFixed(2));
        }
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.total = 0;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
        localStorage.removeItem('total');
      }
    },
    loadCartFromStorage: (state) => {
      if (typeof window !== 'undefined') {
        const savedItems = localStorage.getItem('cart');
        const savedTotal = localStorage.getItem('total');
        if (savedItems) {
          state.items = JSON.parse(savedItems);
        } else {
          state.items = [];
        }
        if (savedTotal) {
          state.total = parseFloat(savedTotal);
        } else {
          state.total = 0;
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, resetCart, loadCartFromStorage } = cartSlice.actions;

export default cartSlice.reducer;
