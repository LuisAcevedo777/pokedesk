import { createSlice } from '@reduxjs/toolkit';
 
export const onSlice = createSlice({
   
   name: 'on',
   initialState: true,
   reducers: {
      ono: (state) => {
       
         return !state

      }
   }
})

export const {ono} = onSlice.actions;

export default onSlice.reducer;
