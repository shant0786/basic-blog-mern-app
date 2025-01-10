import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const NavBar = ({ categories }) => {
  return (
    <nav>
      <div className="navbar top-0 fixed z-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              {categories.map((item, index) => {
                return (
                  <li key={index.toString()}>
                    <NavLink to={"/byCategory" + item.id}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-start ms-20">
            <a className="navbar-brand" href="/">
              <img className="w-28" src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index.toString()}>
                  <NavLink to={"/byCategory/" + item.id}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="lg:me-20">User</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
