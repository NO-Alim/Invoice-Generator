import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  totalItem: 0,
  totalPrice: 0,
  //serverTimeStamp
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productList.push(action.payload);
      state.totalItem = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
    incrementItem: (state, action) => {
      state.productList.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
      });
      state.totalItem = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
    decrementItem: (state, action) => {
      state.productList.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity - 1;
        }
      });
      state.totalItem = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
    editItem: (state, action) => {
      state.productList.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
      });
      state.totalItem = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
    deleteItem: (state, action) => {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      state.totalItem = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);
      state.totalPrice = state.productList.reduce((acc, obj) => {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
    reset: (state) => {
      state.productList = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementItem,
  reset,
  decrementItem,
  editItem,
  deleteItem,
} = cartSlice.actions;
