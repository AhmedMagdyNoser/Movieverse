import error from "../Imgs/404 Error.svg";

export default function PageNotFound() {
  return (
    <div className="text-center my-5">
      <img src={error} alt="Error 404" style={{ width: "375px", maxWidth: "100%", margin: "5px" }} />
      <h2>عذرا الصفحة غير موجودة</h2>
    </div>
  );
}
