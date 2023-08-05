import { useSelector } from "react-redux";
import { getPopularMovies, getTopMovies } from "../api";
import LandingSection from "../Components/Home/LandingSection";
import MoviesSection from "../Components/Home/MoviesSection";
import SearchSection from "../Components/Home/SearchSection";
import ExploreMore from "../Components/Home/ExploreMore";

export default function HomePage() {
  const popularMovies = useSelector((store) => store.popularMoviesSlice);
  const topMovies = useSelector((store) => store.topMoviesSlice);

  return (
    <div>
      <LandingSection />
      <MoviesSection moviesStore={popularMovies} getRequiredMovies={getPopularMovies} title="الأكثر شيوعاً" iconClass="fa-solid fa-fire" />
      <SearchSection />
      <MoviesSection moviesStore={topMovies} getRequiredMovies={getTopMovies} title="الأعلى تقييماً" iconClass="fa-solid fa-star" />
      <ExploreMore />
    </div>
  );
}
