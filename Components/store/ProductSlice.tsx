import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';
import pr1o from "../../public/pro1.jpeg";
import pr2o from "../../public/pro2.jpeg";
import pr3o from "../../public/pro3.jpeg";
import pr4o from "../../public/pro4.jpeg";
import pr5o from "../../public/pro5.jpeg";
import pr6o from "../../public/pro6.jpeg";
import pr7o from "../../public/pro7.jpeg";
import pr8o from "../../public/pro8.jpeg";

interface Product {
  photo: StaticImageData;
  name: string;
  details: string;
  price: number;
  id: number;
  category?: string;
}

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
}

const initialState: ProductsState = {
  products: [
    { id: 1, photo: pr1o, name: "Classic Burger", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 10.99, category: "Main Dish" },
    { id: 2, photo: pr2o, name: "Chocolate Milkshake", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 6.99, category: "Drinks" },
    { id: 3, photo: pr3o, name: "Classic Fries", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 5.99, category: "Breakfast" },
    { id: 4, photo: pr4o, name: "Pancakes", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 8.99, category: "Breakfast" },
    { id: 5, photo: pr5o, name: "Ice Cream", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 3.99, category: "Dessert" },
    { id: 6, photo: pr6o, name: "Chicken Burger", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 10, category: "Main Dish" },
    { id: 7, photo: pr7o, name: "Egg Toast", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 7.99, category: "Breakfast" },
    { id: 8, photo: pr8o, name: "Regular Soda", details: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit", price: 1.99, category: "Drinks" },
  ],
  selectedProduct: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Simulated API call to fetch products
  return initialState.products;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id: number) => {
  // Simulated API call to fetch a product by ID
  return initialState.products.find(product => product.id === id);
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<number>) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProduct = action.payload || null; // Provide a default value if action.payload is undefined
    });
  },
});

export const { selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
