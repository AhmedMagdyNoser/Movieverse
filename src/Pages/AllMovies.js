import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleSpinner } from "../Components/Utils/Loaders"
import Pagination from "../Components/Utils/Pagination"
import Card from "../Components/MovieCard"
import { getMovies } from "../api";

export default function AllMovies() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  function dispatchPage(page) {
    dispatch(getMovies(page))
  }

  // eslint-disable-next-line
  useEffect(() => { dispatchPage(1); }, []);

  let results = <>
    {movies.data.results ?
      <>
        <div className="list mb-4">
          {movies.data.results.map(movie => <Card key={movie.id} movie={movie} />)}
        </div>
        <Pagination getPage={dispatchPage} currentPage={movies.data.page} totalPages={500} />
      </>
      :
      movies.error && <h2 className="text-center">لا يوجد أفلام</h2>
    }
  </>

  return (
    <div className="container py-4">
      {movies.loading ? <SimpleSpinner title='جارى تحميل الافلام' /> : results}
    </div>
  )
}