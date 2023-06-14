import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './Com/Header';
import AllMovies from './Pages/AllMovies';
import SearchMovies from './Pages/SearchMovies';
import MovieDetails from './Pages/MovieDetails';

export default function App() {

  let [homePageNum, setHomePageNum] = useState(1);
  let [searchPageNum, setSearchPageNum] = useState(1);
  let [state, setState] = useState({
    data: [],
    status: '',
    errors: [],
  });

  const apiKey = '52ef927bbeb21980cd91386a29403c78';

  async function getMovies(page) {
    setState({ ...state, status: 'loading' });
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=${page}`)
      .then(res => {
        setState({ data: res.data, status: '', errors: [] });
        setHomePageNum(page);
      })
      .catch(err => {
        console.log(err);
        setState({ data: [], status: '', errors: err.response.data.errors });
      })
  }

  async function search(query, page) {
    // The maximum number of movies this function returns is 20 movies (1 page)
    setState({ ...state, status: 'searching' });
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ar&page=${page}`)
      .then(res => {
        setState({ data: res.data, status: '', errors: [] });
        setSearchPageNum(page)
      })
      .catch(err => {
        console.log(err);
        setState({ data: [], status: '', errors: err.response.data.errors });
      })
  }


  return (
    <HashRouter>
      <Header getMovies={getMovies} search={search} />
      <Routes>
        <Route index element={<AllMovies state={state} getMovies={getMovies} homePageNum={homePageNum} />} />
        <Route path='search/:query' element={<SearchMovies state={state} search={search} searchPageNum={searchPageNum} />} />
        <Route path='movie/:id' element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  )

}