import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Ryan Young" })
      state.push({ name: "Bobby Primrose" })
      state.push({ name: "Sharlene Delroy" })
    },
  },
})

export default slice.reducer;

export const { getUser } = slice.actions;
