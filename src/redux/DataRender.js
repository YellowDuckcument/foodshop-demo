import { createSlice } from "@reduxjs/toolkit";

export const dataNumPrt = createSlice({
  name: "shopBasket",
  initialState: {
    id: 0
  },
  reducers: {
    numPrt: (state, action) => {
      state.id = action.payload;
    }
  }
});

export const { numPrt } = dataNumPrt.actions;

const dataPrtReducer = dataNumPrt.reducer;

export default dataPrtReducer;