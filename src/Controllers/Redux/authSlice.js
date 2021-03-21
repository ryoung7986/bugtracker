import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    LoggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;
      state.admin = false;
      state.LoggedIn = true;
      console.log(state);
    },
    signOut: (state) => {
      state.admin = false;
      state.LoggedIn = false;
    },
    createUser: (state, action) => {

    },
  },
})

export default slice.reducer;

export const {
  signIn,
  signOut,
  createUser,
} = slice.actions;
