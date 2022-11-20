import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: '',
  endDate: '',
};

const headerDurationSLice = createSlice({
  name: 'headerDuration',
  initialState,
  reducers: {
    setDuration: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export default headerDurationSLice.reducer;
export const { setDuration } = headerDurationSLice.actions;
