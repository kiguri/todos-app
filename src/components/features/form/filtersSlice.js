import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: 'all',
    reducers: {
        toggleFilters: ((state, action) => {
            return action.payload
        })

    }
})

export const { toggleFilters } = filtersSlice.actions;

export default filtersSlice.reducer;


