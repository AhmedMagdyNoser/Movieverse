import SearchBar from "../Components/SearchBar";
import searchImg from "../Imgs/search.svg";
import filmImg from "../Imgs/film.svg";

export default function SearchPage() {
  return (
    <section className="container" style={{ height: "100vh" }}>
      <img src={filmImg} alt="filmImg" style={{ width: "1350px" }} />
      <div className="d-flex align-items-center flex-column" style={{ transform: "translateY(50px)" }}>
        <img src={searchImg} alt="SearchImg" style={{ width: "350px" }} />
        <h2 className="fw-bold mb-4">ابحث فى مكتبة الأفلام الأكبر</h2>
        <SearchBar focus />
      </div>
      <style>
        {`
          img[alt="filmImg"] {
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 35%;
            transform: translateY(-50%);
            opacity: 0.35;
          }
        `}
      </style>
    </section>
  );
}
