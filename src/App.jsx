import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import SearchMovies from "./Pages/SearchMovies";
import SearchPage from "./Pages/SearchPage";
import MovieDetails from "./Pages/MovieDetails";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";

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
            <Route path="search/:query/:page" element={<SearchMovies />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="about" element={<AboutUs />} />
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
