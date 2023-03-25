import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let idCount = 0;

export const education = createSlice({
  name: "education",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: idCount++ }];
    },
    erase: (state, action) => {
      return state.filter(
        (element) => JSON.stringify(element) !== JSON.stringify(action.payload)
      );
    },
    update: (state, action) => {
      return state.map((element) => {
        return element.id === action.payload.id ? action.payload : element;
      });
    },
  },
});

export const { add, erase, update } = education.actions;

export default education.reducer;
