import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SimpleSpinner } from "../Components/Utils/Loaders";
import axios from "axios";
import NotFound from "./NotFound";
import { formatDate } from "../utils";

export default function MovieDetails() {
  let params = useParams();
  let location = useLocation();
  let imgHolderRef = useRef();

  const [movieDetails, setMovieDetails] = useState({
    movie: null,
    loading: false,
    error: null,
  });

  async function getMovieDetails() {
    setMovieDetails({ ...movieDetails, loading: true });
    await axios
      .get(`${process.env.REACT_APP_API_URL}/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=ar`)
      .then((res) => {
        setMovieDetails({ movie: res.data, loading: false, error: null });
      })
      .catch((error) => {
        setMovieDetails({ movie: null, loading: false, error: error.response.data });
      });
  }

  function removeLoadingAnimation() {
    imgHolderRef.current.classList.remove("skeleton");
  }

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="container py-4 ">
      {movieDetails.loading ? (
        <SimpleSpinner title="جارى تحميل التفاصيل" />
      ) : movieDetails.movie ? (
        <article>
          <h1 className="text-bg-dark rounded p-4 mb-3 text-center fs-3">{movieDetails.movie.title}</h1>

          <section className="movie-details d-flex flex-column flex-md-row gap-3">
            <div ref={imgHolderRef} className="rounded overflow-hidden movie-poster skeleton">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movieDetails.movie.poster_path}
                alt={movieDetails.movie.title}
                style={{ width: "100%" }}
                onLoad={removeLoadingAnimation}
              />
            </div>

            <div className="d-flex flex-column gap-3 flex-grow-1">
              <div className="bg-white rounded p-4 flex-grow-1">
                <h2 className="fw-bold">القصة</h2>
                <p className="lh-lg m-0">{movieDetails.movie.overview ? movieDetails.movie.overview : "ستتم اضافة التفاصيل قريبا."}</p>
              </div>
              <div className="bg-white p-4 rounded d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                <Info info={formatDate("ar", movieDetails.movie.release_date)} iconClass="fa-solid fa-calendar" />
                <Info info={movieDetails.movie.vote_average} iconClass="fa-solid fa-star" warning />
              </div>
            </div>
          </section>

          <button className="btn btn-primary w-100 mt-3" onClick={() => window.history.back()}>
            العودة
          </button>
          <style>
            {`
            .movie-poster {
              min-width: 350px;
            }
            @media (max-width: 767px) {
              .movie-poster {
                min-width: 100%;
              }
            }
            `}
          </style>
        </article>
      ) : (
        movieDetails.error && <NotFound message="الفيلم غير موجود" />
      )}
    </div>
  );
}

function Info({ info, iconClass, warning }) {
  return (
    <div className="flex-center position-relative rounded-circle mb-3" style={{ backgroundColor: "#f0f0f5", width: "132px", height: "132px" }}>
      <i className={iconClass + " fs-1"}></i>
      <span
        className={"position-absolute flex-center rounded " + (warning ? "text-bg-warning" : "text-bg-dark")}
        style={{ top: "85%", width: "125px", height: "35px" }}
      >
        {info}
      </span>
    </div>
  );
}
