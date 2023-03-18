import {createSlice} from '@reduxjs/toolkit'

export const SignUpSlice = createSlice({
    name: 'signup',
    initialState: {
        value:  {
            email : "",
            password : "",
            plan : "",
        }
    },
    reducers: {
        resetSignUp : (state,action) => {
            console.log('1')
            localStorage.removeItem('userData');
            state.value = {
                email : "",
                password : "",
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
        passwordChange: (state, action) => {
            state.value = {
                email : state.value.email ,
                password : action.payload,
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

export const {resetSignUp,emailChange,passwordChange, planChange} = SignUpSlice.actions

export default SignUpSlice.reducer