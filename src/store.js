import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.js";
import authReducer from "../src/register/authSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
