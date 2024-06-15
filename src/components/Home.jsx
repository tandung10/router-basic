import "../assets/css/Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogs");
  };

  return (
    <>
      <section className="home-container">
        <h1 className="title">One Page ReactJS For Beginners</h1>
        <p className="desc">We are team of talanded coder</p>
        <button className="btn-started" onClick={handleClick}>
          Get Started
        </button>
      </section>
    </>
  );
};

export default Home;
