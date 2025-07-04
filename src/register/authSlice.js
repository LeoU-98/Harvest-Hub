// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Placeholder "database" for demonstration
const dummyUsers = [
  {
    email: "merchant@harvesthub.com",
    password: "merchant123",
    name: "Ahmed",
    image: "/public/merchant.jpg",
    phone: "0100-123-4567",
    location: "Giza, Egypt",
    role: "merchant",
  },
  {
    email: "customer@harvesthub.com",
    password: "customer123",
    name: "Laila",
    image: "/public/customer.jpg",
    phone: "0100-555-9999",
    location: "Cairo, Egypt",
    role: "customer",
  },
  {
    email: "admin@harvesthub.com",
    password: "admin123",
    name: "Khaled",
    image: "/public/admin.jpg",
    phone: "0100-888-4444",
    location: "Alexandria, Egypt",
    role: "admin",
  },
];

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

      const matchedUser = dummyUsers.find(
        (user) => user.email === email && user.password === password,
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
