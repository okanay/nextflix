import {createSlice} from '@reduxjs/toolkit'
import {trLanguage} from "./data/tr";
import {engLanguage} from "./data/eng";

export const languageSlice = createSlice({
    name: 'theme',
    initialState: {
        value: trLanguage,
    },
    reducers: {
        changeLanguage: (state, action) => {
            if (action.payload === "tr")
            {
                state.value = trLanguage
            }
            else if (action.payload === "eng")
            {
                state.value = engLanguage
            }
        },
    },
})

export const {changeLanguage} = languageSlice.actions

export default languageSlice.reducer