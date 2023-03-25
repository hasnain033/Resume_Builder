import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  profession: "",
  country: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
  linkedin: "",
  summary: "",
};

export const details = createSlice({
  name: "details",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, ...action.payload };
    },
    // erase: (state, action) => {
    //   // return state.filter((element) => {
    //   //   console.log(element);
    //   //   // return element.title !== action.payload.title;
    //   //   return JSON.stringify(element) !== JSON.stringify(action.payload);
    //   // });
    //   return state.filter((element) => element !== action.payload);
    // },
  },
});

export const { add, erase } = details.actions;

export default details.reducer;
