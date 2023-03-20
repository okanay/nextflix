import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../slicer/languages/languagesSlice"
import SignUpReducer from "../slicer/SignUp/SignUpSlicer";
import UserReducer from "../slicer/auth/userSlice";

export default configureStore({
    reducer: {
        language: languageReducer,
        signup : SignUpReducer,
        user : UserReducer,
    },
})