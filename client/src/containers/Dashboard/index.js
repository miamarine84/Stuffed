import React, { useContext } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { SearchBar } from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
import { AppContext } from '../../App'
import "./style.css";

function Discover(props) {
  //Here we are importing the globalstate of our applicztion. Coming from the App.js
  const globalState = useContext(AppContext);

  const handleBtnClick = (event) => {
    // Get the data-value of the clicked button, This value is coming from the Card component.
    console.log('this line works')
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    restaurantRenderer()
    console.log(btnType)
    // We'll modify this object and use it to set our component's state
    if (btnType === "pick") {
      //Here we have to save the restaurant into the database and compare this restaurant to the one on the other users array.
      //If they match we alert. Other wise nothing



    } else {
      // If the restaurant is not liked set the match to false

    }
    // Replace our component's state with newState, load the next dog image
    loadNextRestaurant();
  };

  const loadNextRestaurant = () => {
    //Here we need to handle the Next restaurant that need to be loaded.

  };
  function restaurantRenderer() {
    if (globalState.name) {
      return (
        <div>
          <h3>
            {globalState.name}
          </h3>
          <h6>
            Restaurant Rating: {globalState.rating}
          </h6>
          <h6>
            Price: {globalState.price}
          </h6>
          <h6>
            Rating: {globalState.rating}
          </h6>
          <a  target="_blank" href= {globalState.url}>Click here to check out {globalState.name} </a>in Yelp! There are {globalState.reviewCount} reviews available
        </div>
      )
    }
  }

  return (
    <div>
      <Navbar />
      <SearchBar />
      <h1 className="text-center">Find a new restaurant</h1>
      <h3 className="text-center">
        Like or swipe right if its a possible choice
        </h3>
      <Card image={globalState.image} handleBtnClick={handleBtnClick} />
      <h1 className="text-center">
        We have {globalState.matchCount} restaurant matches
        </h1>

        {restaurantRenderer()}

      {/* This is the alert that we are using when something goes wrong */}
      <Alert style={{ opacity: globalState.match ? 1 : 0 }} type="success">
        Found somthing to eat!!!
        </Alert>
    </div>
  )
}

export default Discover;
