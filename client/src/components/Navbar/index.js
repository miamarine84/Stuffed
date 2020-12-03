import React, { useState } from "react";
import "./style.css";
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [clicked, setClick] = useState(false);

    const handleClick = () => {
      setClick(true);
    };
    
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
            <Link
              to="/search"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/search"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Search</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/logout"
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <h5>Logout</h5>
            </Link>
          </li>
        </ul>
        
      </nav>
      <SearchBar
          className="SearchBar"
          small
          term={props.term}
          location={props.location}
        />
      </div>
      
    );
}
export default Navbar;
