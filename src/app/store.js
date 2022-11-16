import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import orderDeskFilter from '../features/orderDeskFilter/orderDeskFilter';

export const store = configureStore({
  reducer: {
    orderDesk: orderDeskFilter,
    cart: cartSlice,
  },
  //devTools: !process.env.NODE_ENV === 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
