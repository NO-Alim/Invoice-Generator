import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  category: '',
  subCategory: '',
};

const transactionFilterSlice = createSlice({
  name: 'transactionFilter',
  initialState,
  reducers: {
    nameFilter: (state, action) => {
      state.name = action.payload;
    },
    categoryFilter: (state, action) => {
      state.category = action.payload;
    },
    subCategoryFilter: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

export default transactionFilterSlice.reducer;
export const { nameFilter, categoryFilter, subCategoryFilter } =
  transactionFilterSlice.actions;
