import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rubros: []
}

export const rubrosSlice = createSlice({
    name: "rubros",
    initialState,
    reducers: {
        guardarRubros: (state, action) => {
            state.rubros = action.payload;
        }
    }
});

export const { guardarRubros } = rubrosSlice.actions;
export default rubrosSlice.reducer;