import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: " ",
    username: " ",
    email: " ",
    imageUrl: " ",
    bio: " ",
  },
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    // checkAuthUser: (state) => {
    //   return state.isAuthenticated as boolean;
    // },
  },
});

export const AuthReducer = authSlice.reducer;

export const { setUser, setIsAuthenticated } = authSlice.actions;
