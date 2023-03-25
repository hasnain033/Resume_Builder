import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];

export const interest = createSlice({
  name: "interest",
  initialState,
  reducers: {
    addInt: (state, action) => {
      state.push(action.payload);
    },
    eraseInt: (state, action) => {
      // return state.filter((element) => {
      //   console.log(element);
      //   // return element.title !== action.payload.title;
      //   return JSON.stringify(element) !== JSON.stringify(action.payload);
      // });
      return state.filter((element) => element !== action.payload);
    },
  },
});

export const { addInt, eraseInt } = interest.actions;

export default interest.reducer;
