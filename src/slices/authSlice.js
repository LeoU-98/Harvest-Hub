import { createSlice } from "@reduxjs/toolkit";
import { dummyUsers } from "../assets/dummyUsers";
import { useSelector } from "react-redux";

const initialState = {
  uid: null,
  email: null,
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, email, accessToken } = action.payload;
      const user = dummyUsers.find((user) => user.uid === uid);

      state.uid = uid;
      state.email = email;
      state.user = user;
      state.token = accessToken;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export function useAuth() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return { isAuthenticated, user };
}

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
