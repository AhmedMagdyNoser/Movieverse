import { Link } from "react-router-dom";

export default function ExploreMore() {
  return (
    <section className="py-4 flex-center" style={{ backgroundColor: "#fff" }}>
      <Link to="/explore/1" className="py-3 px-5 rounded-pill btn btn-primary flex-center gap-2">
        <i className="fa-solid fa-compass"></i>
        تصفح المزيد
      </Link>
    </section>
  );
}
