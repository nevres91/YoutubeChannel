import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null
}

// Sign in with GOOGLE using a redirect.
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const provider = new GoogleAuthProvider();
  // Start a sign in process for an unauthenticated user.
  provider.addScope('profile');
  provider.addScope('email');
  await signInWithRedirect(auth, provider); //in Dashboard.js we used method 'getRedirectResult()' to catch the result.

});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loading = false
      state.isAuthenticated = true;
    },
    loadUser: (state, action) => {
      state.user = action.payload;
      state.loading = false
      state.isAuthenticated = true;
    },
    authentication: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.user = null
    },
  }
})

export const { login, logout, authentication, loadUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;