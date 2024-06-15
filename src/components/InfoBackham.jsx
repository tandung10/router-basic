import backham from "../assets/img/backham.jpg";
import "../assets/css/Infor.css";
import { useNavigate } from "react-router-dom";
const InfoBackham = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogs");
  };
  return (
    <>
      <h2>Infomation about David Backham</h2>
      <div className="info-container">
        <div className="left">
          <img className="info-img" src={backham} alt="" />
        </div>
        <div className="right">
          <h1>Fullname: David Robert Joseph Beckham</h1>
          <h1>Birthday: 2 tháng 5, 1975</h1>
          <h1>Club: Manchester United</h1>
          <h1>Country: England</h1>
          <h1>Position: RM</h1>
        </div>
      </div>
      <button className="btn-back" onClick={handleClick}>
        Back to Blogs
      </button>
    </>
  );
};

export default InfoBackham;
