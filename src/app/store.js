import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import headerDurationSlice from '../features/headerDuration/headerDurationSlice';
import orderDeskFilter from '../features/orderDeskFilter/orderDeskFilter';
import TransactionFilterSlice from '../features/TransactionFilter/TransactionFilterSlice';

export const store = configureStore({
  reducer: {
    orderDesk: orderDeskFilter,
    cart: cartSlice,
    transactionFilter: TransactionFilterSlice,
    headerDuration: headerDurationSlice,
  },
  //devTools: !process.env.NODE_ENV === 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
