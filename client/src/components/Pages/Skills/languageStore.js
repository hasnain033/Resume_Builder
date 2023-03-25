import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    addLang: (state, action) => {
      state.push(action.payload);
    },
    eraseLang: (state, action) => {
      // return state.filter((element) => {
      //   console.log(element);
      //   // return element.title !== action.payload.title;
      //   return JSON.stringify(element) !== JSON.stringify(action.payload);
      // });
      return state.filter((element) => element !== action.payload);
    },
  },
});

export const { addLang, eraseLang } = language.actions;

export default language.reducer;
