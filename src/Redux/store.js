import { configureStore } from "@reduxjs/toolkit";
import movies from "./moviesSlice"

export const store = configureStore({
  reducer: {
    movies
  }
})