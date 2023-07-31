import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../api";
import { SimpleSpinner } from "../Utils/Loaders";
import NotFound from "../../Pages/NotFound";
import Card from "../MovieCard";

export default function PopularSection() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  function renderMoviesList() {
    if (movies.loading) return <SimpleSpinner title="جارى تحميل الافلام" />;
    if (movies.error) return <NotFound message="خطأ فى التحميل" />;

    const moviesResults = movies.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <div className="list-sm">
          {moviesResults.slice(0, 10).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      );

    if (moviesResults && moviesResults.length === 0) return <NotFound message="لا أفلام" />;
  }
  return (
    <section className="container py-5">
      <h2 className="mb-3">الأكثر شيوعا</h2>
      {renderMoviesList()}
    </section>
  );
}
