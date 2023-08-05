import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SimpleSpinner } from "../Utils/Loaders";
import NotFound from "../../Pages/NotFound";
import Card from "../MovieCard";

export default function MoviesSection({ moviesStore, getRequiredMovies, title, iconClass }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequiredMovies());
    // eslint-disable-next-line
  }, [dispatch]);

  function renderMoviesList() {
    if (moviesStore.loading) return <SimpleSpinner title="جارى تحميل الافلام" />;
    if (moviesStore.error) return <NotFound message="خطأ فى التحميل" />;

    const moviesResults = moviesStore.data.results;

    if (moviesResults && moviesResults.length > 0)
      return (
        <div className="list-sm">
          {moviesResults.slice(0, 20).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      );

    if (moviesResults && moviesResults.length === 0) return <NotFound message="لا أفلام" />;
  }
  return (
    <section className="container py-5">
      <h2 className="mb-3">
        <i className={iconClass + " ms-2"} style={{ color: "#f5c530" }}></i>
        {title}
      </h2>
      {renderMoviesList()}
    </section>
  );
}
