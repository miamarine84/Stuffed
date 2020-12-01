import React, {useContext} from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

import {AppContext} from '../App'
import Search from '../components/Search';
import{useReactRouter}from "use-react-router";
import Navbar from "../components/Navbar";
function Discover (props){
  const globalState = useContext(AppContext);

  const handleBtnClick = (event) => {

    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      globalState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  
      globalState.count = +1 
        ? globalState.setCount(globalState.count + 1)
        : globalState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      globalState.setMatch(false)
    }
    // Replace our component's state with newState, load the next dog image
    
    loadNextDog();
  };

  const search = (term, location) => {
    // const { history } = useReactRouter();
    const history =[];

    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  };

  const loadNextDog = () => {
    API.getRandomDog()
      .then((res) =>
      globalState.setImage(res.data.message)

      )
      .catch((err) => console.log(err));
  };


  return(
    <div>
       < Navbar />
       <br></br>
        <h1 className="text-center">Find a new restaurant</h1>
        <h3 className="text-center">
          Like or swipe right if its a possible choice
        </h3>
        <Card image={globalState.image} handleBtnClick={handleBtnClick} />
        <h1 className="text-center">
          We have {globalState.matchCount} restaurant matches
        </h1>
        <Alert style={{ opacity: globalState.match ? 1 : 0 }} type="success">
          Found somthing to eat!!!
        </Alert>
      </div>
  )
}

export default Discover;

