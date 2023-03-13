import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Header({ search, getPage }) {
  let inputValue = useRef(0);
  let navigate = useNavigate();

  function goDefault() {
    getPage(1);
    inputValue.current.value = '';
  }

  return (
    <nav className="navbar navbar-expand-lg py-3 bg-dark">
      <div className="container " >
        <Link to={'/'} className="text-decoration-none">
          <h1 onClick={goDefault} className="text-white fw-bold fs-3 m-0">قائمة الأفلام</h1>
        </Link>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <i className="fa-solid fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" style={{ flexGrow: '0' }} id="navbarSupportedContent">
          <form className="d-flex gap-2 mt-2 mt-lg-0" onSubmit={(e) => search(e, inputValue.current.value)}>
            <input ref={inputValue} className="form-control shadow-none rounded border-0" placeholder="ابحث.." />
            <button  className="btn btn-warning" onClick={() => navigate('/')} type="submit">بحث</button>
          </form>
        </div>
      </div>
    </nav>
  )
}