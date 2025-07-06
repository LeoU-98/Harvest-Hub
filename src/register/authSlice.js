// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { dummyUsers } from "../assets/dummyUsers"; // Adjust the import path as necessary

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      console.log(password);
      const matchedUser = dummyUsers.find(
        (user) => user.email === email && /123$/.test(password),
      );

      if (matchedUser) {
        const { password, ...userWithoutPassword } = matchedUser;
        state.isAuthenticated = true;
        state.user = userWithoutPassword;
        state.error = null;
      } else {
        state.error = "Invalid email or password.";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
