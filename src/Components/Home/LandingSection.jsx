import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cover1 from "../../Imgs/cover1.jpg";
import cover2 from "../../Imgs/cover2.jpg";
import cover3 from "../../Imgs/cover3.jpg";
import "./LandingSection.css";

export default function LandingSection() {
  const [coverIndex, setCoverIndex] = useState(0);
  const allCovers = [cover1, cover2, cover3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoverIndex((prevIndex) => (prevIndex + 1) % allCovers.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImage = allCovers[coverIndex];

  return (
    <section className="landing-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container text-white content">
        <div className="mx-2">
          <h1 className="fw-bold mb-3">اطّلع على عالم السينما</h1>
          <p>مكتبة كبيرة من أحدث الأفلام والأعمال التلفزيونية الأكثر شهرة</p>
        </div>
        <div className="mt-4 d-flex gap-2 justify-content-center">
          <LandingLink title="اكتشف" path="/explore" iconClass="fa-solid fa-compass" />
          <LandingLink title="ابحث" path="/search" iconClass="fa-solid fa-search" />
        </div>
      </div>
    </section>
  );
}

function LandingLink({ title, path, iconClass }) {
  return (
    <Link
      to={path}
      style={{ width: "125px", height: "45px" }}
      className="text-decoration-none btn btn-danger rounded-2 shadow-sm flex-center gap-2"
    >
      <i className={iconClass}></i>
      <span>{title}</span>
    </Link>
  );
}
