import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AllMovies from "./Pages/AllMovies";
import SearchMovies from "./Pages/SearchMovies";
import MovieDetails from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: "101vh" }}>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="explore/:page" element={<AllMovies />} /> */}
          <Route path="search/:query" element={<SearchMovies />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound message="عذرا الصفحة غير موجودة" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
