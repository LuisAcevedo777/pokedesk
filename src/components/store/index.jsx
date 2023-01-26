
import { configureStore } from '@reduxjs/toolkit'
import  colorSlice  from './slices/color.slice'
import onSlice from './slices/on.slice'
import listNumberSlice from './slices/listNumber.slice'
import nameSlice from './slices/name.slice'

export default configureStore({
  reducer: {
            name: nameSlice,
            number: listNumberSlice,
            color: colorSlice,
            on: onSlice
	}
})