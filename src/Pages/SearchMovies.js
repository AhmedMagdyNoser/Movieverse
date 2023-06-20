import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom"
import { SimpleSpinner } from "../Components/Utils/Loaders"
import Pagination from "../Components/Utils/Pagination"
import Card from "../Components/MovieCard"
import { search } from "../api";

export default function SearchMovies() {

  let params = useParams();
  let location = useLocation();

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  function dispatchSearch(page) {
    dispatch(search({ query: params.query, page }))
  }

  // eslint-disable-next-line
  useEffect(() => { dispatchSearch(1) }, [location])

  function renderMoviesList() {
    if (movies.loading) return <SimpleSpinner title='جارى البحث' />
    if (movies.error) return <h2 className="text-center">خطأ فى التحميل</h2>

    const moviesResults = movies.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <>
          <h3 className="text-center mb-4"> نتائج البحث عن "{params.query}" </h3>
          <div className="list mb-4"> {moviesResults.map(movie => <Card key={movie.id} movie={movie} />)} </div>
          <Pagination getPage={dispatchSearch} currentPage={movies.data.page} totalPages={movies.data.total_pages} />
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