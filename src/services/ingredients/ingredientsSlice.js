import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants';

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchIngredients',
    async () => {
        const response = await fetch(`${API_URL}/ingredients`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    }
);

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default ingredientsSlice.reducer;
