import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import AllMovies from './Pages/AllMovies';
import SearchMovies from './Pages/SearchMovies';
import MovieDetails from './Pages/MovieDetails';
import PageNotFound from './Pages/PageNotFound';

export default function App() {

  let [homePageNum, setHomePageNum] = useState(1);
  let [searchPageNum, setSearchPageNum] = useState(1);
  let [state, setState] = useState({
    data: [],
    status: '',
    errors: [],
  });

  async function getMovies(page) {
    setState({ ...state, status: 'loading' });
    await axios.get(`${process.env.REACT_APP_API_URL}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ar&page=${page}`)
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
    setState({ ...state, status: 'searching' });
    await axios.get(`${process.env.REACT_APP_API_URL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=ar&page=${page}`)
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
      <div style={{ minHeight: '101vh' }}>
        <Header getMovies={getMovies} search={search} />
        <Routes>
          <Route index element={<AllMovies state={state} getMovies={getMovies} homePageNum={homePageNum} />} />
          <Route path='search/:query' element={<SearchMovies state={state} search={search} searchPageNum={searchPageNum} />} />
          <Route path='movie/:id' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </HashRouter>
  )

}