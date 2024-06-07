import { createSlice } from '@reduxjs/toolkit';

const constructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        bun: null,
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            if (action.payload.type === 'bun') {
                state.bun = action.payload;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload._id);
        },
        moveItem: (state, action) => {
            const [removed] = state.items.splice(action.payload.dragIndex, 1);
            state.items.splice(action.payload.hoverIndex, 0, removed);
        }
    }
});

export const { addItem, removeItem, moveItem } = constructorSlice.actions;
export default constructorSlice.reducer;
