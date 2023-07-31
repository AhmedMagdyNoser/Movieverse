import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "../api";

const popularMovies = createSlice({
  name: "popularMovies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // ---------- getPopularMovies ----------
      .addCase(getPopularMovies.pending, (state, action) => {
        // loading
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        // success
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        // failed
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default popularMovies.reducer;
