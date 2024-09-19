import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // other initial states if needed
};

const authSlice = createSlice({
  name: "auth",
  initialState:{
    isAuthenticated: false, // or null, depending on your needs
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    // other reducers if needed
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
