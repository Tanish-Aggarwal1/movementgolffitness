import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    googleSheetData: [],
    loading: false,
    error: null
}

const dataSlice = createSlice({
    name: data,
    initialState,
    reducers: {
        setGoogleSheetData: (state, action) => {
            state.googleSheetData = action.payload;
            state.loading = false;
            state.error = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const { setGoogleSheetData, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;