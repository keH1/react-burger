import { createSlice } from '@reduxjs/toolkit';

const ingredientDetailsSlice = createSlice({
    name: 'ingredientDetails',
    initialState: null,
    reducers: {
        setIngredient: (state, action) => action.payload,
        clearIngredient: () => null
    }
});

export const { setIngredient, clearIngredient } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
