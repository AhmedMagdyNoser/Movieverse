import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom";
import { getMovies, search } from "../api";
import { useDispatch } from "react-redux";
export default function Header() {

  let navigate = useNavigate();
  let inputValue = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.current.value) {
      dispatch(search({query: inputValue.current.value, page: 1}))
      navigate(`/search/${inputValue.current.value}`);
    }
    event.target.reset();
  }

  return (
    <nav className="navbar navbar-expand-lg py-3 bg-dark">
      <div className="container" >

        <Link to={'/'} className="text-decoration-none">
          <h1 onClick={() => dispatch(getMovies(1))} className="text-white fw-bold fs-3 m-0">قائمة الأفلام</h1>
        </Link>

        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" style={{ flexGrow: '0' }} id="navbarSupportedContent">
          <form className="d-flex gap-2 mt-2 mt-lg-0" onSubmit={(e) => handleSubmit(e)}>
            <input ref={inputValue} className="form-control shadow-none rounded border-0" placeholder="ابحث.." />
            <button className="btn btn-warning" type="submit">بحث</button>
          </form>
        </div>

      </div>
    </nav>
  )
}