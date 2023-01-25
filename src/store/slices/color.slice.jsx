import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
    name: 'color',
    initialState:'blue',
    reducers: {

       

    }
})

export const {color} =colorSlice.actions;

export default colorSlice.reducer;
