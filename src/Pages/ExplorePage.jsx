import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPopularMovies } from "../api";
import { SimpleSpinner } from "../Components/Utils/Loaders";
import Pagination from "../Components/Utils/Pagination";
import Card from "../Components/MovieCard";

const MAX_PAGES = 500;

export default function AllMovies() {
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.popularMoviesSlice);

  function dispatchGetPopularMovies(page) {
    dispatch(getPopularMovies(page));
  }

  useEffect(() => {
    dispatchGetPopularMovies(params.page);
    // eslint-disable-next-line
  }, [location]);

  function renderMoviesList() {
    if (movies.loading) return <SimpleSpinner title="جارى تحميل الافلام" />;
    if (movies.error) return <h2 className="text-center">خطأ فى التحميل</h2>;

    const moviesResults = movies.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <>
          <div className="list mb-4">
            {" "}
            {moviesResults.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}{" "}
          </div>
          <Pagination getPage={(page) => navigate(`/explore/${page}`)} currentPage={movies.data.page} totalPages={MAX_PAGES} />
        </>
      );

    if (moviesResults && moviesResults.length === 0) return <h2 className="text-center">لا يوجد أفلام</h2>;
  }

  return <div className="container py-4">{renderMoviesList()}</div>;
}
