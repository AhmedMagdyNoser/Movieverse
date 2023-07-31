import { createSlice } from "@reduxjs/toolkit";
import { getTopMovies } from "../api";

const topMovies = createSlice({
  name: "popularMovies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // ---------- getTopMovies ----------
      .addCase(getTopMovies.pending, (state, action) => {
        // loading
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopMovies.fulfilled, (state, action) => {
        // success
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTopMovies.rejected, (state, action) => {
        // failed
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default topMovies.reducer;
