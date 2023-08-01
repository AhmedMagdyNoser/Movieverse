import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-3 mb-md-0">
            <Link to="/" className="text-decoration-none text-white mb-3 d-flex gap-2 align-items-center">
              <img src={require("../Imgs/logo.png")} alt="Movieverse" style={{ width: "50px" }} />
              <h3 className="m-0">Movieverse</h3>
            </Link>
            <p className="text-white-50" style={{ maxWidth: '750px' }}>
              نتيح لك استكشاف الأفلام والعروض الشهيرة بطريقة ممتعة ومثيرة. نفخر بتميزنا في تقديم معلومات شاملة ومحدثة حول الأفلام فقم بإكتشاف
              العالم السحري للسينما والتلفزيون.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h3>روابط سريعة</h3>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-decoration-none">
                الصفحة الرئيسية
              </Link>
              <Link to="/explore/1" className="text-decoration-none">
                الأفلام الأكثر شعبية
              </Link>
              <Link to="/search" className="text-decoration-none">
                ابحث عن فيلم
              </Link>
              <Link to="/about-us" className="text-decoration-none">
                من نكون؟
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
