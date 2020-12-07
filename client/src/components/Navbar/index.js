import React, { useState } from "react";
import "./style.css";
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_OUT} from '../../utils/actions';// import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [state,dispatch]=useStoreContext();
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };
  const AuthorToken = localStorage.getItem("authorization-token");
  const logOut = () => {
    console.log("test");
    localStorage.clear()
    dispatch({
      type:LOG_OUT,
      payload:null
  })
  }
  return (
    <div>
      <nav className="navContainer navbar navbar-expand-lr">
        <Link className="navbar-brand" to="/home">
          <img
            src={"https://user-images.githubusercontent.com/65417908/101260452-fcc00300-36fd-11eb-86b5-65a6d8d0187a.png"}
            width="110"
            height="80
                              "
            alt="Stuff'd"
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
