import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularMovies = createAsyncThunk("movies/getPopularMovies", async (page) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/3/movie/popular?api_key=${
      process.env.REACT_APP_API_KEY
    }&page=${page || 1}&language=ar`
  );
  return data;
});

export const getTopMovies = createAsyncThunk("movies/getTopMovies", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ar`
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
