import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import List from './components/List';
import Pagination from './components/Utils/Pagination';
import MovieDetails from './components/MovieDetails';

export default function App() {

  let [currentPage, setCurrentPage] = useState(1);
  let [data, setData] = useState({
    movies: [],
    status: '',
    errors: [],
  });

  const apiKey = '52ef927bbeb21980cd91386a29403c78';

  async function getMovies(page) {
    setData({ ...data, status: 'loading' });
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=${page}`)
      .then(res => {
        setData({ movies: res.data.results, status: '', errors: [] });
        setCurrentPage(page);
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
    event.target.reset();
  }

  // eslint-disable-next-line
  useEffect(() => { getMovies(1) }, []);

  return (
    <HashRouter>
      <Header search={search} getPage={getMovies} />
      <Routes>
        <Route index element={
          <div>
            <List data={data} />
            <Pagination getPage={getMovies} currentPage={currentPage} totalPages={500} />
          </div>
        } />
        <Route path='movie/:id' element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  )

}