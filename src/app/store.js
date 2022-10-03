import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from '../features/addToCart/addToCartSlice';
export const store = configureStore({
  reducer: {
    cart: addToCartReducer,
  },
});
