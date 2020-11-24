import React, { Component,useState,useEffect } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
<<<<<<< HEAD
function Dashboard(){
  const [image,setImage]=useState('');
  const [match,setMatch]=useState(false);
  const [matchCount,setCount]=useState(0);
  useEffect(() => {
    API.getRestaurants("/businesses/search",{
      params:{
        location:"Miami",
        term:"burger",
        limit:15
      }
    }).then(({data})=>{
      console.log(data);
      
    })
   
  }, []);
=======
import "./style.css";
import { Link } from "react-router-dom";


class Dashboard extends Component {

  
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
         <nav className="navContainer navbar navbar-expand-lg">
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
                window.location.pathname === "/" || window.location.pathname === "//home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>Home</h5>
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
    </nav>
        <h1 className="text-center">In the mood of...</h1>
        <h3 className="text-center">
          Thumbs up on any restaurant you'd like to go!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          same {this.state.matchCount} restaurants so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! Your friend Liked It Too!!!
        </Alert>
      </div>
    );
  }
>>>>>>> 5d9ed2fb308cbc7a6cb898ba8b76f1fd8857af1f
}
// class Dashboard extends Component {

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextDog();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
//   };

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h1 className="text-center">Make New Friends</h1>
//         <h3 className="text-center">
//           Thumbs up on any pups you'd like to meet!
//         </h3>
//         <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
//         <h1 className="text-center">
//           Made friends with {this.state.matchCount} pups so far!
//         </h1>
//         <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
//           Yay! That Pup Liked You Too!!!
//         </Alert>
//       </div>
//     );
//   }
// }

export default Dashboard;













