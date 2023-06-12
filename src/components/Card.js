import { Link } from "react-router-dom"
import { FadeIn } from "./Utils/Fade"
export default function Card({ film }) {
  
  return (
    <FadeIn time='1s'>
      <Link to={`/movie/${film.id}`}>
        <div className="rounded overflow-hidden " style={{ position: 'relative' }}>
          <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} style={{ width: '100%' }} alt={film.title} />
          <div className="text-white overlay">
            <p className="text-center"><b>{film.title}</b></p>
            <p>تاريخ الاصدار : {film.release_date}</p>
            <p>التقييم : {film.vote_average}</p>
            <p>عدد المقيمين : {film.vote_count}</p>
          </div>
        </div>
      </Link>
    </FadeIn>
  )
}