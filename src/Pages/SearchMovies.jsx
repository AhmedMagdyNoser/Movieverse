import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SimpleSpinner } from "../Components/Utils/Loaders";
import Pagination from "../Components/Utils/Pagination";
import Card from "../Components/MovieCard";
import { search } from "../api";
import NotFound from "./NotFound";

export default function SearchMovies() {
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.searchSlice);

  // eslint-disable-next-line
  useEffect(() => {
    dispatch(search({ query: params.query, page: params.page }));
  }, [location]);

  function renderMoviesList() {
    if (movies.loading) return <SimpleSpinner title="جارى البحث" />;
    if (movies.error) return <NotFound message="خطأ فى التحميل" />;

    const moviesResults = movies.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <>
          <h3 className="text-center mb-4"> نتائج البحث عن "{params.query}" </h3>
          <div className="list mb-4">
            {moviesResults.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination
            getPage={(page) => navigate(`/search/${params.query}/${page}`)}
            currentPage={movies.data.page}
            totalPages={movies.data.total_pages}
          />
        </>
      );

    if (moviesResults && moviesResults.length === 0) return <NotFound message="ليس هناك أفلام" />;
  }

  return <div className="container py-4">{renderMoviesList()}</div>;
}
