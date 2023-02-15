import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dpto: null
}

export const ciudadesSlice = createSlice({
    name: "ciudades",
    initialState,
    reducers: {
        seleccionarDpto: (state, action) => {
            state.dpto = action.payload;
        }
    }
});

export const { seleccionarDpto } = ciudadesSlice.actions;
export default ciudadesSlice.reducer;