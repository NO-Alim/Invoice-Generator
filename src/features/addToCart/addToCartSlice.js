const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cartList: [
    {
      itemId: 1,
      itemName: 'Hello world',
      itemPrice: 234,
      quantity: 1,
    },
  ],
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    incrementCartItem: (state, action) => {
      //id
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    },
    decrementCartItem: (state, action) => {
      //id
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
    },
    editCartItemQuantity: (state, action) => {
      //id,quantity
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },
    deleteCartItem: (state, action) => {
      //id
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.cartList = [];
    },
  },
});

export default addToCartSlice.reducer;
export const {
  addCart,
  decrementCartItem,
  deleteCartItem,
  editCartItemQuantity,
  incrementCartItem,
  resetCart,
} = addToCartSlice.actions;
