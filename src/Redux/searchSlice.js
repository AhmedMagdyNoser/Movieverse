import { createSlice } from "@reduxjs/toolkit";
import { search } from "../api";

const searchMovies = createSlice({
  name: "popularMovies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // ---------- search ----------
      .addCase(search.pending, (state, action) => {
        // loading
        state.loading = true;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        // success
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(search.rejected, (state, action) => {
        // failed
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default searchMovies.reducer;
