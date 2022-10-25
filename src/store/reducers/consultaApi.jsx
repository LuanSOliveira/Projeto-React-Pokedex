import { createSlice } from "@reduxjs/toolkit";

function CriaLista(inicial, final){
    let recebeApi = []
    for(var i = inicial; i<= final; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())
      .then((data) => recebeApi.push(data))
    }
    return recebeApi
}

const listaGen1 = CriaLista(1, 151)
const listaGen2 = CriaLista(152, 251)
const listaGen3 = CriaLista(252, 386)
const listaGen4 = CriaLista(387, 493)
const listaGen5 = CriaLista(494, 649)
const listaGen6 = CriaLista(650, 721)

const initialState = []

const consultaApiSlice = createSlice({
    name: "consultaApi",
    initialState,
    reducers: {
        consultar: (state, {payload}) => {
            state = initialState

            if(payload === 1){
                return state = listaGen1.map((item) => [...state, item])
            }
            else if(payload === 2){
                return state = listaGen2.map((item) => [...state, item])                
            }
            else if(payload === 3){
                return state = listaGen3.map((item) => [...state, item])
            }
            else if(payload === 4){
                return state = listaGen4.map((item) => [...state, item])
            }
            else if(payload === 5){
                return state = listaGen5.map((item) => [...state, item])
            }
            else if(payload === 6){
                return state = listaGen6.map((item) => [...state, item])
            }
        }
    }
})

export const {consultar} = consultaApiSlice.actions
export default consultaApiSlice.reducer