import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authReducer";

const store = configureStore({
  reducer: {
    authReducer: authReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
