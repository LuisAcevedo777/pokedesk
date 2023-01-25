import { createSlice } from '@reduxjs/toolkit';

export const onSlice = createSlice({
   name: 'on',
   initialState: '',
   reducers: {
      ono: (state, action) => {
          

         return action.payload

      }
   }
})

export const { ono } = onSlice.actions;

export default onSlice.reducer;
