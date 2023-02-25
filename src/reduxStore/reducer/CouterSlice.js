import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // }
    data: (state) => {
        state.value =null;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const selectCounter = (state) => state.counter;

export default counterSlice.reducer;
