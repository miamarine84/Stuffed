import React, { useContext, useState } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { SearchBar } from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
import { AppContext } from "../../App";
import "./style.css";
import SearchUser from "../../components/SearchUser";
import TinderCard from "react-tinder-card";

function Discover(props) {
  //Here we are importing the globalstate of our applicztion. Coming from the App.js
  const globalState = useContext(AppContext);

  const loadNextRestaurant = () => {
    //Here we need to handle the Next restaurant that need to be loaded.
    globalState.setRestaurantCounter(globalState.restaurantCounter + 1);
  };
  const handleBtnClick = (event) => {
    // Get the data-value of the clicked button, This value is coming from the Card component.
    console.log("this line works");
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    
    // We'll modify this object and use it to set our component's state
    if (btnType === "pick") {

    let restaurantId = globalState.currentRestaurant.id
      globalState.setLikedId(restaurantId)
      console.log(globalState.likedId)
      console.log(globalState.userName)
      // This may be the reason why this is not working userName is not being set properly I have to take off now but that is the other parameter that is missing to make a proper axios call check console.log line 31 to see it's empty
      console.log(globalState.userName)

      API.liked(globalState.likedId,globalState.userName )
        .then((res) => {
          console.log("The like was successfull!!", globalState.likedId, res);
        })
        .catch((err) => {
          console.log("Error with the like", err);
        });
    }
    // Here we are loading the next restaurant and rendering the information of it.
    loadNextRestaurant();
    restaurantRenderer();
  };

  function restaurantRenderer() {
    if (globalState.name) {
      return (
        <div className="info-container">
          <h6 className="restaurant-info">Price: {globalState.price}</h6>
          <h6 className="restaurant-info">
            Restaurant Rating: {globalState.rating}
          </h6>

          <h6 className="restaurant-info">
            <a target="_blank" href={globalState.url}>
              Click here to check out {globalState.name} on Yelp!{" "}
            </a>
            There are {globalState.reviewCount} reviews available
          </h6>
        </div>
      );
    }
  }
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div class="background">
      <Navbar />
      <p name="currentUser" value={globalState.username}>
        Welcome{globalState.username}
      </p>
      <SearchBar />
      <h1 className="text-center">Find a new restaurant</h1>
      <h3 className="text-center">
        Like or swipe right if its a possible choice
      </h3>
      <div className="container-div">
        <div className="name-info">
          <h3 className="restaurant-name">{globalState.name}</h3>
        </div>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
        >
          <Card image={globalState.image} handleBtnClick={handleBtnClick}>
            {" "}
          </Card>
        </TinderCard>
        {restaurantRenderer()}
        <SearchUser />
      </div>
      <h1 className="text-center">
        We have {globalState.matchCount} restaurant matches
      </h1>
      {/*<div className='buttons'>
        <button onClick={() => onSwipe('left')}>Swipe left!</button>
        <button onClick={() => onSwipe('right')}>Swipe right!</button>
      </div>*/}
      {/* This is the alert that we are using when something goes wrong */}
      <Alert
        name="restId"
        value={globalState.restId}
        style={{ opacity: globalState.match ? 1 : 0 }}
        type="success"
      >
        Found something to eat!!!
      </Alert>
    </div>
  );
}

export default Discover;
