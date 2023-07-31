import { configureStore } from "@reduxjs/toolkit";
import popularMoviesSlice from "./popularMoviesSlice";
import topMoviesSlice from "./topMoviesSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    popularMoviesSlice,
    topMoviesSlice,
    searchSlice,
  },
});
