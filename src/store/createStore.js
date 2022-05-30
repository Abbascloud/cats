import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { catsReducer } from "./cats/reducer";
import { getCats } from "../api/cats/cats";

export const store = configureStore({
  reducer: {
    allCats: catsReducer,
  },
  middleware: [thunk.withExtraArgument({ getCats })],
});
