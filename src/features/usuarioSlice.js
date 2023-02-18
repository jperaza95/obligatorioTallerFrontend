import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuario: null,
}

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        seleccionarUsuario: (state, action) => {
            state.usuario = action.payload;
            console.log(state.usuario);
        }
    }
});

export const { seleccionarUsuario} = usuarioSlice.actions;
export default usuarioSlice.reducer;