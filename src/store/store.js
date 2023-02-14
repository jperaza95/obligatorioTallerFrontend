import { configureStore } from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice"
// import tareasReducer from "../features/tareasSlice"

export const store = configureStore({
    reducer:{
        departamentos:departamentosReducer
    }
});