import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-dark sticky-top">
      <div className="container">
        <Link to={"/"}>
          <img src={require("../Imgs/logo.png")} alt="Movieverse" style={{ width: "50px" }} />
        </Link>

        <div className="flex-center gap-3">
          <Link to="/search" title="البحث" className="text-muted bg-dark-hover rounded p-2">
            <i className="fa-solid fa-search fs-4"></i>
          </Link>
          <Link to="/explore" title="الأكثر شيوعا" className="text-muted bg-dark-hover rounded p-2">
            <i className="fa-solid fa-fire fs-4"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
