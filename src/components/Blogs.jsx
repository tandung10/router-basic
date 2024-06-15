import ronaldo from "../assets/img/ronaldo.jpg";
import kevin from "../assets/img/kevin.jpg";
import backham from "../assets/img/backham.jpg";
import "../assets/css/Blogs.css";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  const navigate = useNavigate();
  const handleRo = () => {
    navigate("/ronaldo");
  };
  const handleKevin = () => {
    navigate("/kevin");
  };
  const handleBack = () => {
    navigate("/backham");
  };

  return (
    <>
      <h1 className="content-title">Our Blog</h1>
      <div className="blog-container">
        <div className="content">
          <img className="content-img" src={ronaldo} alt="" />
          <h1>Ronaldo</h1>
          <p>Siuuuuuuuuuuuuuuuuuuuuuuuu</p>
          <button onClick={handleRo}>Read more</button>
        </div>

        <div className="content">
          <img className="content-img" src={kevin} alt="" />
          <h1>Kevin</h1>
          <p>Siuuuuuuuuuuuuuuuuuuuuuuuu</p>
          <button onClick={handleKevin}>Read more</button>
        </div>

        <div className="content">
          <img className="content-img" src={backham} alt="" />
          <h1>Backham</h1>
          <p>Siuuuuuuuuuuuuuuuuuuuuuuuu</p>
          <button onClick={handleBack}>Read more</button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
