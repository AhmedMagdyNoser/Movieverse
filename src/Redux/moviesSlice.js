import { createSlice } from "@reduxjs/toolkit";
import { getMovies, search } from "../api";

const movies = createSlice({
  name: 'movies',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      // getMovies
      .addCase(getMovies.pending, (state, action) => { // loading
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => { // success
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getMovies.rejected, (state, action) => { // failed
        state.loading = false;
        state.error = action.error;
      })

      // search
      .addCase(search.pending, (state, action) => { // loading
        state.loading = true;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => { // success
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(search.rejected, (state, action) => { // failed
        state.loading = false;
        state.error = action.error;
      })

  }
})

export default movies.reducer;