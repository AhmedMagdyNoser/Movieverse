import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

let res;

export default function MovieDetails() {

  const params = useParams(); // it's the parameters in the current url '/movie/:id' the only param is the id
  const [movieDetails, setMovieDetails] = useState();

  const getMovieDetails = async () => {
    res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
    setMovieDetails(res.data);
    // console.log(res.data);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return movieDetails ?
    <div className="container">
      <div className="py-4 d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
        <img
          src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
          alt="Poster"
          style={{ maxHeight: '500px' }}
          className="rounded border"
        />
        <div className="text-center d-flex flex-column justify-content-center align-items-center flex-grow-1 fs-3">
          <p className="bg-dark text-white rounded p-3 px-5"><b>{movieDetails.title}</b></p>
          <p >تاريخ الاصدار : {movieDetails.release_date}</p>
          <p>التقييم : {movieDetails.vote_average}</p>
          <p>عدد المقيمين : {movieDetails.vote_count}</p>
        </div>
      </div>
      <div className="bg-white rounded p-3">
        <h2 className="fw-bold">القصة</h2>
        <p className="lh-base">{movieDetails.overview}</p>
      </div>
      <div className="py-4 d-flex justify-content-center gap-2">
        <Link to={'/'}>
          <button className="btn btn-primary">العودة</button>
        </Link>
        {/* <a href={movieDetails.homepage} target='_blank' rel="noreferrer" className="btn btn-primary">مشاهدة</a> */}
      </div>
    </div>
    :
    <div className="container d-flex flex-column align-items-center py-4">
      <div className="spinner-border text-primary"></div>
      <h3 className="py-3">جارى تحميل التفاصيل</h3>
      <Link to={'/'}>
        <button className="btn btn-primary">العودة</button>
      </Link>
    </div>
}