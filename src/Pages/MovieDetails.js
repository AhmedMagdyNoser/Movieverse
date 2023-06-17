import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SimpleSpinner } from "../Components/Utils/Loaders";
import axios from 'axios';

export default function MovieDetails() {

  let params = useParams(); // it's the parameters in the current url '/movie/:id' the only param is the id
  let location = useLocation();

  const [movieDetails, setMovieDetails] = useState({
    movie: null,
    status: '',
    errors: [],
  });

  async function getMovieDetails() {
    setMovieDetails({ ...movieDetails, status: 'loading' });
    await axios.get(`${process.env.REACT_APP_API_URL}/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=ar`)
      .then(res => {
        setMovieDetails({ movie: res.data, status: '', errors: [] });
      })
      .catch(err => {
        console.log(err);
        setMovieDetails({ movie: null, status: '', errors: err.response.data.errors });
      })
  }

  // eslint-disable-next-line
  useEffect(() => { getMovieDetails(); }, [location]);

  return (
    <div className="container py-4">
      {
        movieDetails.status === 'loading' ?
          <SimpleSpinner title="جارى تحميل التفاصيل" />
          : movieDetails.movie ?
            <div>
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start mb-4">
                <img
                  src={'https://image.tmdb.org/t/p/w500' + movieDetails.movie.poster_path}
                  alt="Poster"
                  style={{ maxHeight: '500px' }}
                  className="rounded border"
                />
                <div className="text-center d-flex flex-column justify-content-center align-items-center flex-grow-1 fs-3">
                  <p className="bg-dark text-white rounded p-3 px-5"><b>{movieDetails.movie.title}</b></p>
                  <p>تاريخ الاصدار : {movieDetails.movie.release_date}</p>
                  <p>التقييم : {movieDetails.movie.vote_average}</p>
                  <p>عدد المقيمين : {movieDetails.movie.vote_count}</p>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <h2 className="fw-bold">القصة</h2>
                <p className="lh-lg">{movieDetails.movie.overview}</p>
              </div>
              <button className="btn btn-primary w-100 my-3" onClick={() => window.history.back()}>العودة</button>
            </div>
            :
            <h2 className="text-center">عفوا الفيلم غير موجود</h2>
      }
    </div>
  )

}