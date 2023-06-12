import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Pagination from './components/Pagination';
import MovieDetails from './components/MovieDetails';
const api = require('./api');

export default function App() {

  let [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);

  function getAllMovies() {
    api.getAllMovies(setData);
  }

  function getPage(x) {
    api.getPage(x, setData, setCurrentPage);
  }

  function search(event, query) {
    api.search(event, query, setData);
  }

  useEffect(() => { getAllMovies() }, []);

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