import searchBackground from "../../Imgs/search.jpg";
import SearchBar from "../SearchBar";

export default function SearchSection() {
  return (
    <div className="landing-section" style={{ backgroundImage: `url(${searchBackground})` }}>
      <div className="container text-white content">
        <div className="mx-2 flex-center gap-3 flex-column">
          <h2 className="fw-bold">ابحث فى مكتبة الأفلام الأكبر</h2>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
