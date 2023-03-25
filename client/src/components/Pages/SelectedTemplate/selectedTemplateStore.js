import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const selectedTemplate = createSlice({
  name: "selectedTemplate",
  initialState,
  reducers: {
    add: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { add } = selectedTemplate.actions;

export default selectedTemplate.reducer;
