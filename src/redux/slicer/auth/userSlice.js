import {createSlice} from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value:  {
            email : "",
            planID : "-2",
            planName : "",
            accessToken : "",
        }
    },
    reducers: {
       setUser : (state, action) => {
            state.value = {
                email : action.payload.email,
                planID : action.payload.planID,
                planName : action.payload.planName,
                accessToken : action.payload.accessToken,
           }
       },
        resetUserData : state => {
           state.value = {
               email : "",
               planID : "-2",
               planName : "",
               accessToken : "",
           }
        }

    },
})

export const {setUser} = UserSlice.actions

export default UserSlice.reducer