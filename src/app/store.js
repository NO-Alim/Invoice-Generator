import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import orderDeskFilter from '../features/orderDeskFilter/orderDeskFilter';
import TransactionFilterSlice from '../features/TransactionFilter/TransactionFilterSlice';

export const store = configureStore({
  reducer: {
    orderDesk: orderDeskFilter,
    cart: cartSlice,
    transactionFilter: TransactionFilterSlice,
  },
  //devTools: !process.env.NODE_ENV === 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
