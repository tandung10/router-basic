import { NavLink, Outlet } from "react-router-dom";
import "../assets/css/Layout.css";
const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
