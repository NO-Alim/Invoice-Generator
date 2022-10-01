const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cartList: [],
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartList.push(action.payload);
    },
  },
});
