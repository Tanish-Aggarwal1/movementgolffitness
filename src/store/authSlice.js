import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    session: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setSession: (state, action) => {
            state.isAuthenticated = true;
            state.session = action.payload;
            state.user = action.payload?.user || null;
        },
        clearSession: (state, action) => {
            state.isAuthenticated = false;
            state.session = null;
            state.user = null;
        }
    }
})

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;