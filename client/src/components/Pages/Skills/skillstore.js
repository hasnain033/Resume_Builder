import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [];
let idCount = 0;

export const skill = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      return [...state, { ...action.payload, id: idCount++ }];
    },
    eraseSkill: (state, action) => {
      // return state.filter((element) => {
      //   console.log(element);
      //   // return element.title !== action.payload.title;
      //   return JSON.stringify(element) !== JSON.stringify(action.payload);
      // });
      return state.filter(
        (element) => JSON.stringify(element) !== JSON.stringify(action.payload)
      );
    },
  },
});

export const { addSkill, eraseSkill } = skill.actions;

export default skill.reducer;
