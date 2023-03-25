import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const templates = createSlice({
  name: "templates",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { add } = templates.actions;

export default templates.reducer;
