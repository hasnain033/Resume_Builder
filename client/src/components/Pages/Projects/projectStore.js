import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];
let idCount = 0;

export const projects = createSlice({
  name: "projects",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: idCount++ }];
    },
    erase: (state, action) => {
      // return state.filter((element) => {
      //   console.log(element);
      //   // return element.title !== action.payload.title;
      //   return JSON.stringify(element) !== JSON.stringify(action.payload);
      // });
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

export const { add, erase, update } = projects.actions;

export default projects.reducer;
