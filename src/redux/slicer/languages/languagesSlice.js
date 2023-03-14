import {createSlice} from '@reduxjs/toolkit'
import {trLanguage} from "./data/tr";
import {engLanguage} from "./data/eng";

export const defaultLanguage = {code : "tr", data : trLanguage}
export const languageSlice = createSlice({
    name: 'theme',
    initialState: {
        value: defaultLanguage.data,
    },
    reducers: {
        changeLanguage: (state, action) => {
            switch (action.payload) {
                case "tr":
                    state.value = trLanguage
                    break
                case "eng":
                    state.value = engLanguage
                    break
                default:
                    state.value = trLanguage
                    break
            }
        },
    },
})

export const {changeLanguage} = languageSlice.actions

export default languageSlice.reducer