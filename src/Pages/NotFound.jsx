import error from "../Imgs/error.svg";

export default function NotFound({ message }) {
  return (
    <div className="text-center my-5 py-5">
      <img src={error} alt="Error 404" style={{ width: "375px", maxWidth: "100%", margin: "5px" }} />
      <h2>{message}</h2>
    </div>
  );
}
