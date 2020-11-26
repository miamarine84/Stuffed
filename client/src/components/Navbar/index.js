import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {MenuItems} from "./MenuItems"



class Navbar extends Component {
    state={
        clicked:false
    }

    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }

  render (){
      return(
          <nav className="navContainer navbar navbar-expand-lr">
              <Link className="navbar-brand" to="/">
                        <img src={require('./logowithoutbackground.png')} width="110" height="80
                              " alt="" loading="lazy"/>
                              
                        </Link>
        
              <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                  
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index)=>{
                    return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                          {item.title}
                      </a>
                    </li>
                    )
                  })}
                </ul>
          </nav>
      )
  }
}

export default Navbar

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
    
//     <nav className="navContainer navbar navbar-expand-lg">
//       <Link className="navbar-brand" to="/">
//       <img src="https://user-images.githubusercontent.com/65417908/99906944-e5b5f580-2ca7-11eb-9582-a2313fa43539.png" width="70" height="70
//       " alt="" loading="lazy"/>
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/dashboard"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               <h5>Dashboard</h5>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//               <h5>Matched</h5>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/search"
//               className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//             >
//               <h5>search</h5>
//             </Link>
//           </li>
          
//         </ul>
//       </div>
//       <Link id="logOutButton"
//       to="/Log Out"
//       className={window.location.pathname === "/logOut" ? "nav-link active" : "navbar-link"}
//     >
//       <h4>Log out</h4>
//     </Link>
//     </nav>
    
   
   
//   );
// }

// export default Navbar;
