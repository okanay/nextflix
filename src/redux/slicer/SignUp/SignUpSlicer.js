import {createSlice} from '@reduxjs/toolkit'

export const SignUpSlice = createSlice({
    name: 'signup',
    initialState: {
        value: "",
    },
    reducers: {
        dataChange: (state, action) => {

            }
        },
})

export const {dataChange} = SignUpSlice.actions

export default SignUpSlice.reducer