import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const listNumberSlice = createSlice({
		name: 'number',
    initialState: 20,
    reducers: {
        number: (state, action)=>{
            const num = action.payload
            return num
        }
    }
})

export const { number } = listNumberSlice.actions;

export default listNumberSlice.reducer;