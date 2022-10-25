import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const pokeSelecionatoSlice = createSlice({
    name: "pokeSelecionado",
    initialState,
    reducers: {
        selecionar: (state, {payload}) => {
            state = initialState
            return state = payload
        }
    }
})

export const {selecionar} = pokeSelecionatoSlice.actions
export default pokeSelecionatoSlice.reducer