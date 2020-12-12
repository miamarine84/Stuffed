import React, { useContext, useState, useEffect, createRef } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { SearchBar } from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
import { AppContext } from "../../App";
import "./style.css";

import TinderCard from "react-tinder-card";

function Discover() {
  //Here we are importing the globalstate of our applicztion. Coming from the App.js
  const globalState = useContext(AppContext);
  const [matchCount,setCount]=useState(0);
  const tinderCard = createRef()
  const loadNextRestaurant = () => {
    //Here we need to handle the Next restaurant that need to be loaded.
    globalState.setRestaurantCounter(globalState.restaurantCounter + 1);
  };
  //create a like function that returns the like put method
  const search = async () => {
        setCount(globalState.bothLike.length)
        // creating variables for user thats logged on, user we are looking for, and arrays of both of those users
        let currentUser = globalState.userName;
        let friendSearchName = globalState.usersFriend;
        let currentUsersLikes = [];
        let userFriendLikes = [];

        API.searchUser(currentUser).then(res => {
            console.log(globalState.bothLike)
            currentUsersLikes.push(res.data[0].likedRestaurants);
            // pushing the liked restaurants in to those arrays for the current user
        }).catch(err => console.log(err));

        API.searchUser(friendSearchName).then(res => {

            userFriendLikes.push(res.data[0].likedRestaurants)
            // pushing the liked restaurants in to those arrays for the user we are looking for
            similarLikes()
        }).catch(err => console.log(err));
   
        function similarLikes() {
            if (userFriendLikes && currentUsersLikes) {
                let likeSimilarArray = currentUsersLikes[0].filter(value => 
                userFriendLikes[0].includes(value))
                globalState.setBothLike(likeSimilarArray);
                console.log(globalState.bothLike)
            }
        }
    }
    useEffect(()=>{
      globalState.setMatch(true);
      setTimeout(function(){
        globalState.setMatch(false);
      },1000)
    },[matchCount])
  const handleBtnClick = (event) => {
    // Get the data-value of the clicked button, This value is coming from the Card component.
    const btnType = event.target.attributes.getNamedItem("data-value").value;

    // We'll modify this object and use it to set our component's state
    if (btnType === "pick") {
      // tinderCard.current.swipe("left")
      let restaurantId = globalState.currentRestaurant.id;
      globalState.setLikedId(restaurantId);

      // This may be the reason why this is not working userName is not being set properly I have to take off now but that is the other parameter that is missing to make a proper axios call check console.log line 31 to see it's empty
      API.liked(globalState.likedId, globalState.userName)
        .then((res) => {
          console.log("this is the like : ", res)
        })
        .catch((err) => {
          console.log("Error with the like", err);
        });
        search();
    }
    // else {
    //   tinderCard.current.swipe("right")
    // }
    // Here we are loading the next restaurant and rendering the information of it.
    loadNextRestaurant();
    restaurantRenderer();
  };

  //handling the swipe
  const onSwipe = (direction) => {
    if (direction === "right") {
      let restaurantId = globalState.currentRestaurant.id;
      globalState.setLikedId(restaurantId);

      // This may be the reason why this is not working userName is not being set properly I have to take off now but that is the other parameter that is missing to make a proper axios call check console.log line 31 to see it's empty
      API.liked(globalState.likedId, globalState.userName)
        .then((res) => {
          console.log("this is the like : ", res)
        })
        .catch((err) => {
          console.log("Error with the like", err);
        });
    }
    loadNextRestaurant();
    restaurantRenderer()
  };
  //listening to the direction
  

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



  return (
    <div class="background">
      <Navbar />
      <p className="username" name="currentUser" value={globalState.userName}>
        Welcome {globalState.userName}
      </p>
      <SearchBar />
      {/* This is the alert that we are using when something goes wrong */}
      <Alert
        name="restId"
        value={globalState.restId}
        style={{ opacity: globalState.match ? 1 : 0 }}
        type="success"
      >
        Found something to eat!!!
      </Alert>
      <h1 className="text-center">Find a new restaurant</h1>
      <p className="text-center likeorswipe">
        Like or swipe right if its a possible choice
      </p>
      <div className="container-div">
        <div className="name-info">
          <h3 className="restaurant-name">{globalState.name}</h3>
        </div>
        <TinderCard ref={
          tinderCard
        }
          onSwipe={onSwipe}
          preventSwipe={["right", "left", "up"]}
        >
          <Card value={globalState.restId} image={globalState.image} handleBtnClick={handleBtnClick}>
            {" "}
          </Card>
        </TinderCard>
        </div>
        
        <h1 className="restaurant-info">
          {restaurantRenderer()}</h1>
        
      
      <h1 className="restaurant-matches">
        We have {globalState.bothLike.length} restaurant matches
      </h1>
    </div>
  );
}

export default Discover;
