import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import ExplorePage from "./Pages/ExplorePage";
import SearchMovies from "./Pages/SearchMovies";
import MovieDetails from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import SearchPage from "./Pages/SearchPage";

export default function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: "101vh" }} className="d-flex flex-column">
        <Header />
        <ScrollToTop />
        <div className="flex-grow-1">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="explore/:page" element={<ExplorePage />} />
            <Route path="search/:query" element={<SearchMovies />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound message="الصفحة غير موجودة" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

// To scroll to top on routing
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
}
