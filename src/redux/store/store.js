import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../slicer/languages/languagesSlice"
import SignUpReducer from "../slicer/SignUp/SignUpSlicer";

export default configureStore({
    reducer: {
        language: languageReducer,
        singUp : SignUpReducer,
    },
})