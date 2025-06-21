import { createSlice } from "@reduxjs/toolkit";
// import { embed } from "motion/react-client";
import { useSelector } from "react-redux";

// Initial profile state
const initialState = {
  logged: false,
  name: "", // starts empty
  email: "", // starts empty
  password: "", // starts empty
  image: "https://via.placeholder.com/150", // placeholder image
  phone: "000-000-0000",
  address: "123 Placeholder St.",
  location: "Nowhere City",
  social: {
    facebook: "https://facebook.com/placeholder",
    twitter: "https://twitter.com/placeholder",
    instagram: "https://instagram.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { logged, email, password } = action.payload;
      state.logged = logged;
      state.email = email;
      state.password = password;
    },

    logOut: (state) => {
      console.log("from logout");

      state.logged = false;
      state.email = "";
      state.password = "";
    },

    updateProfile: (state, action) => {
      return {
        ...state,
        ...action.payload,
        logged: state.logged,
        email: state.email,
        password: state.password,
      };
    },
    updateSocialMedia: (state, action) => {
      state.social = {
        ...state.social,
        ...action.payload,
      };
    },
    resetProfile: () => initialState,
  },
});

export const { logIn, logOut, updateProfile, updateSocialMedia, resetProfile } =
  profileSlice.actions;

// ✅ Full profile returned here
export function useProfile() {
  const profile = useSelector((state) => state.profile);

  return {
    logged: profile.logged,
    fullName: profile.name,
    email: profile.email,
    password: profile.password,
    profileImage: profile.image,
    phone: profile.phone,
    address: profile.address,
    location: profile.location,
    social: profile.social,
  };
}

export default profileSlice.reducer;
