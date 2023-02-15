import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuario: null,
    pass:null
}

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        seleccionarUsuario: (state, action) => {
            state.usuario = action.payload;
        },
        seleccionarPass: (state, action) => {
            state.usuario = action.payload;
        }
    }
});

export const { seleccionarUsuario, seleccionarPass} = usuarioSlice.actions;
export default usuarioSlice.reducer;