import ronaldo from "../assets/img/ronaldo.jpg";
import "../assets/css/Infor.css";
import { useNavigate } from "react-router-dom";
const InfoRonaldo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogs");
  };
  return (
    <>
      <h2>Infomation about Ronaldo</h2>
      <div className="info-container">
        <div className="left">
          <img className="info-img" src={ronaldo} alt="" />
        </div>
        <div className="right">
          <h1>Fullname: Cristiano Ronaldo dos Santos Aveiro</h1>
          <h1>Birthday: 5 tháng 2, 1985</h1>
          <h1>Club: Manchester United</h1>
          <h1>Country: Portugal</h1>
          <h1>Position: Forward</h1>
        </div>
      </div>
      <button className="btn-back" onClick={handleClick}>
        Back to Blogs
      </button>
    </>
  );
};

export default InfoRonaldo;
