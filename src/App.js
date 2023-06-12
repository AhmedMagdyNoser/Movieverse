import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import List from './components/List';
import Pagination from './components/Pagination';
import MovieDetails from './components/MovieDetails';

let res;

export default function App() {

  let [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);

  // Accessing data from API .. The Key is 52ef927bbeb21980cd91386a29403c78
  const getAllMovies = async () => {
    res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1')
    setData(res.data);
  }

  useEffect(() => {
    getAllMovies()
  }, []);

  const getPage = async (x) => {
    res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${x}`)
    setData(res.data);
    setCurrentPage(x);
  }

  const search = async (e, query) => {
    // The maximum number of movies this function returns is 20 movies (1 page)
    e.preventDefault()
    res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${query}&language=ar`)
    setData(res.data);
  }

  return (
    <>
      <HashRouter>
      <Header search={search} getPage={getPage} />
        <Routes>
          <Route index element={
            <div>
              <List data={data.results} />
              <Pagination getPage={getPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          } />
          <Route path='movie/:id' element={<MovieDetails />} />
        </Routes>
      </HashRouter>
    </>
  )

}