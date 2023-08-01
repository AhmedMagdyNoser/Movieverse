import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { search } from "../api";

export default function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current.value) {
      dispatch(search({ query: inputRef.current.value, page: 1 }));
      navigate(`/search/${inputRef.current.value}`);
    }
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar d-flex rounded-pill overflow-hidden shadow-sm">
      <input ref={inputRef} type="text" placeholder="ابحث.." className="flex-grow-1 border-0 px-4 py-3" style={{ outline: "none" }} />
      <button type="submit" className="btn btn-primary rounded-0 border-0 px-4 py-3">
        <i className="fa-solid fa-search"></i>
      </button>
    </form>
  );
}
