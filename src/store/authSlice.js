import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  session: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.isAuthenticated = true;
      state.session = action.payload.session;   
    },
    clearSession: (state) => {
      state.isAuthenticated = false;
      state.session = null;
    },
  },
});

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;
