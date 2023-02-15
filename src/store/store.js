import { configureStore } from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice"
import ciudadesReducer from "../features/ciudadesSlice"
import usuarioReducer from "../features/usuarioSlice"

export const store = configureStore({
    reducer:{
        departamentos:departamentosReducer,
        ciudades:ciudadesReducer,
        usuario:usuarioReducer
    }
});