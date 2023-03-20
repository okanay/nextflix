import {createSlice} from '@reduxjs/toolkit'

export const SignUpSlice = createSlice({
    name: 'signup',
    initialState: {
        value:  {
            email : "",
            plan : "",
        }
    },
    reducers: {
        resetSignUp : (state,action) => {
            localStorage.removeItem('userData');
            state.value = {
                email : "",
                plan : "",
            }
        },
        emailChange: (state, action) => {
            state.value = {
                email : action.payload ,
                password : state.value.password,
                plan : state.value.plan,
            }

            localStorage.setItem("userData", JSON.stringify(state.value));
        },
        planChange: (state, action) => {
                state.value = {
                    email : state.value.email,
                    password : state.value.password,
                    plan : action.payload ,
                }

                localStorage.setItem("userData", JSON.stringify(state.value));
            }
        },
})

export const {resetSignUp,emailChange, planChange} = SignUpSlice.actions

export default SignUpSlice.reducer