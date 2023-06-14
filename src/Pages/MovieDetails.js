import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SimpleSpinner } from "../Components/Utils/Loaders";
import axios from 'axios';

export default function MovieDetails() {

  const params = useParams(); // it's the parameters in the current url '/movie/:id' the only param is the id

  const [movieDetails, setMovieDetails] = useState({
    movie: null,
    status: '',
    errors: [],
  });

  const apiKey = '52ef927bbeb21980cd91386a29403c78';

  async function getMovieDetails() {
    setMovieDetails({ ...movieDetails, status: 'loading' });
    await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=ar`)
      .then(res => {
        setMovieDetails({ movie: res.data, status: '', errors: [] });
      })
      .catch(err => {
        console.log(err);
        setMovieDetails({ movie: null, status: '', errors: err.response.data.errors });
      })
  }

  // eslint-disable-next-line
  useEffect(() => { getMovieDetails(); }, []);

  return (
    <div className="container py-4">
      {
        movieDetails.status === 'loading' ?
          <SimpleSpinner title="جارى تحميل التفاصيل" />
          : movieDetails.movie ?
            <div>
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
                <img
                  src={'https://image.tmdb.org/t/p/w500' + movieDetails.movie.poster_path}
                  alt="Poster"
                  style={{ maxHeight: '500px' }}
                  className="rounded border"
                />
                <div className="text-center d-flex flex-column justify-content-center align-items-center flex-grow-1 fs-3">
                  <p className="bg-dark text-white rounded p-3 px-5"><b>{movieDetails.movie.title}</b></p>
                  <p >تاريخ الاصدار : {movieDetails.movie.release_date}</p>
                  <p>التقييم : {movieDetails.movie.vote_average}</p>
                  <p>عدد المقيمين : {movieDetails.movie.vote_count}</p>
                </div>
              </div>
              <div className="bg-white rounded p-3">
                <h2 className="fw-bold">القصة</h2>
                <p className="lh-base">{movieDetails.movie.overview}</p>
              </div>
              <div className="py-4 d-flex justify-content-center gap-2">
                <Link to={'/'}>
                  <button className="btn btn-primary">العودة</button>
                </Link>
              </div>
            </div>
            :
            <h2 className="text-center">عفوا الفيلم غير موجود</h2>
      }
    </div>
  )

}