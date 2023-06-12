import axios from 'axios';

const apiKey = '52ef927bbeb21980cd91386a29403c78';

export async function getAllMovies(setData) {
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=1`)
    .then(res => { setData(res.data) })
    .catch(err => { console.log(err) })
}

export async function getPage(x, setData, setCurrentPage) {
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar&page=${x}`)
    .then(res => { setData(res.data); setCurrentPage(x) })
    .catch(err => { console.log(err) })
}

export async function search(event, query, setData) {
  // The maximum number of movies this function returns is 20 movies (1 page)
  event.preventDefault();
  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ar`)
  .then(res => { setData(res.data); })
  .catch(err => { console.log(err) })
}