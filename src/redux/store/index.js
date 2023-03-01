import { configureStore } from "@reduxjs/toolkit";
import dataPrtReducer from "../DataRender";


const store = configureStore({
  reducer: {
    menu: dataPrtReducer
  }
});

export default store;