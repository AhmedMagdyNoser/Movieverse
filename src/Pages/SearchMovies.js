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

  function dispatchPage(page) {
    dispatch(search({ query: params.query, page }))
  }

  useEffect(() => { dispatchPage(1) }, [location])

  let results = <>
    {movies.data.results?.length > 0 ?
      <>
        <h3 className="text-center mb-4"> نتائج البحث عن "{params.query}" </h3>
        <div className="list mb-4">
          {movies.data.results.map(movie => <Card key={movie.id} movie={movie} />)}
        </div>
        <Pagination getPage={dispatchPage} currentPage={movies.data.page} totalPages={movies.data.total_pages} />
      </>
      :
      movies.error && <h2 className="text-center">لا يوجد أفلام</h2>
    }
  </>

  return (
    <div className="container py-4">
      {movies.loading ? <SimpleSpinner title='جارى البحث' /> : results}
    </div>
  )
}