import { configureStore } from '@reduxjs/toolkit';

import plantReducer from './plantSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    plants: plantReducer,
    cart: cartReducer
  }
});