import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dsaReducer from "./slices/dsaSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    dsaTopics: dsaReducer,
  },
});

export default store;
