import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
   /* <nav className="navContainer navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
      <img src="https://user-images.githubusercontent.com/65417908/99906944-e5b5f580-2ca7-11eb-9582-a2313fa43539.png" width="70" height="70
      " alt="" loading="lazy"/>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>Dashboard</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              <h5>Matched</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              <h5>search</h5>
            </Link>
          </li>
          
        </ul>
      </div>
      <Link id="logOutButton"
      to="/Log Out"
      className={window.location.pathname === "/logOut" ? "nav-link active" : "navbar-link"}
    >
      <h4>Log out</h4>
    </Link>
    </nav>
    
   */


   /*NAV OPTION 2
  <nav id="nav-wrap">

  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
 <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

  <ul id="nav" className="nav">
  <Link className="navbar-brand" to="/">
      <img src="https://user-images.githubusercontent.com/65417908/99906944-e5b5f580-2ca7-11eb-9582-a2313fa43539.png" width="70" height="70
      " alt="" loading="lazy"/>
      </Link>
     <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
     <li><a className="smoothscroll" href="#dashboard"><Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
     </Link> Dashboard</a></li>
     <li><a className="smoothscroll" href="#matched"><Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/matched"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
     </Link> Matched</a></li>
     <li><a className="smoothscroll" href="#logIn"><Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/LogIn"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
     </Link> LogIn</a></li>
  </ul>

</nav>
  );*/

  <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#matched">matched</a></li>
	         <li><a className="smoothscroll" href="#search">search</a></li>
            <li><a className="smoothscroll" href="#logout">log out</a></li>
            
         </ul>

      </nav>
     
        );
}

export default Navbar;
