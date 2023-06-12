import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Pagination from './components/Pagination';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';

export default function App() {

  let [currentPage, setCurrentPage] = useState(1);
  let [data, setData] = useState({
    movies: [],
    status: '',
    errors: [],
  });

  const apiKey = '52ef927bbeb21980cd91386a29403c78';

  async function getAllMovies() {
    setData({ ...data, status: 'loading' });
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=1`)
      .then(res => {
        setData({ movies: res.data.results, status: '', errors: [] });
      })
      .catch(err => {
        console.log(err);
        setData({ movies: [], status: '', errors: err.response.data.errors });
      })
  }

  async function getPage(x) {
    setData({ ...data, status: 'loading' });
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=${x}`)
      .then(res => {
        setData({ movies: res.data.results, status: '', errors: [] });
        setCurrentPage(x);
      })
      .catch(err => {
        console.log(err);
        setData({ movies: [], status: '', errors: err.response.data.errors });
      })
  }

  async function search(event, query) {
    // The maximum number of movies this function returns is 20 movies (1 page)
    event.preventDefault();
    setData({ ...data, status: 'searching' });
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ar`)
      .then(res => {
        setData({ movies: res.data.results, status: '', errors: [] });
      })
      .catch(err => {
        console.log(err);
        setData({ movies: [], status: '', errors: err.response.data.errors });
      })
  }

  // eslint-disable-next-line
  useEffect(() => { getAllMovies() }, []);

  return (
    <HashRouter>
      <Header search={search} getPage={getPage} />
      <Routes>
        <Route index element={
          <div>
            <List data={data} />
            <Pagination getPage={getPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        } />
        <Route path='movie/:id' element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  )

}