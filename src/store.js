import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer
  }
});