import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { search } from "../api";
import { useEffect } from "react";

export default function SearchBar({ focus }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    focus && inputRef.current.focus()
    // eslint-disable-next-line
  }, [inputRef.current])

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current.value) {
      navigate(`/search/${inputRef.current.value}/1`);
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
