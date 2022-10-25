import { configureStore } from "@reduxjs/toolkit";
import consultaApiSlice from "./reducers/consultaApi";
import pokeSelecionadoSlice from "./reducers/pokeSelecionado";

const store = configureStore({
    reducer:{
        consultaApi: consultaApiSlice,
        pokeSelecionado: pokeSelecionadoSlice

    },
    middleware: [] //parâmetro declarado para desabilitar o middleware
})

export default store;