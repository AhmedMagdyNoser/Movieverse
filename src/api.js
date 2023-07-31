import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movies/getMovies", async (page) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ar&page=${page}`
  );
  return data;
});

export const getPopularMovies = createAsyncThunk("movies/getPopularMovies", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ar&sort_by=popularity.desc`
  );
  return data;
});

export const search = createAsyncThunk("movies/search", async (args) => {
  const { query, page } = args;
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=ar&page=${page}`
  );
  return data;
});
