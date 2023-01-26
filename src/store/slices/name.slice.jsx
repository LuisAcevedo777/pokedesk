
import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
    name: 'name',
    initialState: '',
    reducers: {
        userName: (state, action) => {
            const userName = action.payload
            return userName
        }
    }
})

export const { userName } = nameSlice.actions;

export default nameSlice.reducer;
