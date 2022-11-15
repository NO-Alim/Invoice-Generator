import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  subCategory: '',
};

const filterSlice = createSlice({
  name: 'orderDeskFilter',
  initialState,
  reducers: {
    categoryFilter: (state, action) => {
      state.category = action.payload;
    },
    subCategoryFilter: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { categoryFilter, subCategoryFilter } = filterSlice.actions;
