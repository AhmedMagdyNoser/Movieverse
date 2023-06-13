import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import List from './components/MoviesList';
import MoviePage from './components/MoviePage';

export default function App() {

  let [currentPage, setCurrentPage] = useState(1);
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
        setCurrentPage(page);
      })
      .catch(err => {
        console.log(err);
        setState({ data: [], status: '', errors: err.response.data.errors });
      })
  }

  async function search(event, query) {
    // The maximum number of movies this function returns is 20 movies (1 page)
    event.preventDefault();
    setState({ ...state, status: 'searching' });
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ar`)
      .then(res => {
        setState({ data: res.data, status: '', errors: [] });
      })
      .catch(err => {
        console.log(err);
        setState({ data: [], status: '', errors: err.response.data.errors });
      })
    event.target.reset();
  }

  // eslint-disable-next-line
  useEffect(() => { getMovies(1) }, []);

  return (
    <HashRouter>
      {/* <Header search={search} getPage={getMovies} /> */}
      <Routes>
        <Route index element={<List state={state} getMovies={getMovies} currentPage={currentPage} />} />
        <Route path='movie/:id' element={<MoviePage />} />
      </Routes>
    </HashRouter>
  )

}