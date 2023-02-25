import { configureStore } from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice"
import ciudadesReducer from "../features/ciudadesSlice"
import rubrosReducer from "../features/rubrosSlice"
import movimientosReducer from "../features/movimientosSlice"

export const store = configureStore({
    reducer:{
        departamentos:departamentosReducer,
        ciudades:ciudadesReducer,
        rubros:rubrosReducer,
        movimientos:movimientosReducer
    }
});