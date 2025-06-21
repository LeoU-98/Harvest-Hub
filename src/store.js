import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice.js";
import profileReducer from "./profile/profileSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
