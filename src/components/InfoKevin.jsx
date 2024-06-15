import kevin from "../assets/img/kevin.jpg";
import "../assets/css/Infor.css";
import { useNavigate } from "react-router-dom";
const InfoKevin = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogs");
  };
  return (
    <>
      <h2>Infomation about Kevin De Bruyne</h2>
      <div className="info-container">
        <div className="left">
          <img className="info-img" src={kevin} alt="" />
        </div>
        <div className="right">
          <h1>Fullname: Kevin De Bruyne</h1>
          <h1>Birthday: 28 tháng 6, 1991</h1>
          <h1>Club: Manchester City</h1>
          <h1>Country: Belgium</h1>
          <h1>Position: CAM</h1>
        </div>
      </div>
      <button className="btn-back" onClick={handleClick}>
        Back to Blogs
      </button>
    </>
  );
};

export default InfoKevin;
