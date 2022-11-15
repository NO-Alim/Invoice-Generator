import { configureStore } from '@reduxjs/toolkit';
import orderDeskFilter from '../features/orderDeskFilter/orderDeskFilter';

export const store = configureStore({
  reducer: {
    orderDesk: orderDeskFilter,
  },
  //devTools: !process.env.NODE_ENV === 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
