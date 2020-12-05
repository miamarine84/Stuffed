import React, { useState } from "react";
import "./style.css";
// import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const AuthorToken = localStorage.getItem("authorization-token");

  const logOut = () => {
    console.log("test");
    localStorage.clear()

  }

  return (
    <div>
      <nav className="navContainer navbar navbar-expand-lr">
        <Link className="navbar-brand" to="/">
          <img
            src={require("./logowithoutbackground.png")}
            width="110"
            height="80
                              "
            alt=""
            loading="lazy"
          />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/dashboard"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Discover</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/discover"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Matches</h5>
            </Link>
          </li>
          <li className="nav-item">
<<<<<<< HEAD
            {AuthorToken?(<Link 
             onClick={logOut}
=======
            <Link
              to="/signup"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/signup"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Sign Up</h5>
            </Link>
          </li>
          <li className="nav-item">
            {AuthorToken ? (<Link
              onClick={logOut}
>>>>>>> 59aa5981303f37c1ff1f0b6380f25f996f43939c
              to="/logout"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/login"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>logout</h5>
            </Link>) : (<Link
              to="/login"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/login"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Login</h5>
            </Link>)}
          </li>
        </ul>

      </nav>
    </div>

  );
}
export default Navbar;
