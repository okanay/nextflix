import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../slicer/themeSlice"

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
})