import { useSelector } from "react-redux";
import { getPopularMovies, getTopMovies } from "../api";
import LandingSection from "../Components/Home/LandingSection";
import MoviesSection from "../Components/Home/MoviesSection";

export default function HomePage() {
  const popularMovies = useSelector((store) => store.popularMoviesSlice);
  const topMovies = useSelector((store) => store.topMoviesSlice);

  return (
    <div>
      <LandingSection />
      <MoviesSection movies={popularMovies} getRequiredMovies={getPopularMovies} title="الاكثر شيوعا" />
      <MoviesSection movies={topMovies} getRequiredMovies={getTopMovies} title="الاعلى تقييما" />
    </div>
  );
}
