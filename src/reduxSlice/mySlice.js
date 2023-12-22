import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
}

const MySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkMode = !state.darkMode
    },
  
  },
}); 

export const { toggleDarkmode } = MySlice.actions;
export default MySlice.reducer;