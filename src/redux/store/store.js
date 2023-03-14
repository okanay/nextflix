import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../slicer/languages/languagesSlice"

export default configureStore({
    reducer: {
        language: languageReducer,
    },
})