import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleSpinner } from "../Components/Utils/Loaders"
import Pagination from "../Components/Utils/Pagination"
import Card from "../Components/MovieCard"
import { getMovies } from "../api";

const MAX_PAGES = 500;

export default function AllMovies() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => { dispatch(getMovies(1)) }, [dispatch]);

  function renderMoviesList() {
    if (movies.loading) return <SimpleSpinner title='جارى تحميل الافلام' />
    if (movies.error) return <h2 className="text-center">خطأ فى التحميل</h2>

    const moviesResults = movies.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <>
          <div className="list mb-4"> {moviesResults.map(movie => <Card key={movie.id} movie={movie} />)} </div>
          <Pagination getPage={page => dispatch(getMovies(page))} currentPage={movies.data.page} totalPages={MAX_PAGES} />
        </>
      )

    if (moviesResults && moviesResults.length === 0)
      return <h2 className="text-center">لا يوجد أفلام</h2>;
  }

  return (
    <div className="container py-4">
      {renderMoviesList()}
    </div>
  )
}