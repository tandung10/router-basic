import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import InfoRonaldo from "../components/InfoRonaldo";
import InfoKevin from "../components/InfoKevin";
import InfoBackham from "../components/InfoBackham";

const Main = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ronaldo" element={<InfoRonaldo />} />
        <Route path="/kevin" element={<InfoKevin />} />
        <Route path="/backham" element={<InfoBackham />} />
      </Routes>
    </Router>
  );
};

export default Main;
