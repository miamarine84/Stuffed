//Here we are importing our state and react as well
import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
//This is the stylesheet , maybe we should call it 'style.css'
import styles from "./SearchBar.module.css";
//Here we are importing our costum hook.
import { useBusinessSearch } from "../../hooks/useBusinessSearch";

export function SearchBar(props) {
  //Here we are getting the global state of the application.
  const globalState = useContext(AppContext);

  //These are our states.
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [finalTerm, setFinalTerm] = useState("");
  const [finalLocation, setFinalLocation] = useState("");
  //This is how we handle the form submit.
  function submit(e) {
    e.preventDefault();
    //Here we are using the callback function from our 'useBusinessSearch' and passing the term and location as the values.
    setSearchParams({ term, location });
  }
  //These are the variable that we can work with.
  const [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
  ] = useBusinessSearch(finalTerm, finalLocation);
  //This function takes care of setting the current restaurant in the array to the global state.
  function setRestaurant(){

    if (!businesses) {
    console.log("Loadint the Businesses");
  } else {
    globalState.setBusinesses(businesses);
    //Ternary operator that sets the current restaurant when there is an object inside of the 'businessesResult'
    {
      globalState.businessesResult <= 0
        ? console.log("loading results...")
        : globalState.setCurrent(globalState.businessesResult[globalState.restaurantCounter]);
    }
    
    if (globalState.currentRestaurant) {
      //Trying to set the state
      try{
      globalState.setRestId(globalState.currentRestaurant.restId);
      globalState.setName(globalState.currentRestaurant.name);
      globalState.setReview(globalState.currentRestaurant.review_count);
      globalState.setPhone(globalState.currentRestaurant.phone);
      globalState.setPrice(globalState.currentRestaurant.price);
      globalState.setRating(globalState.currentRestaurant.rating);
      globalState.setAddress(globalState.currentRestaurant.location);
      globalState.setImage(globalState.currentRestaurant.image_url);
      globalState.setUrl(globalState.currentRestaurant.url);

      console.log("This is the current restaurant information: ",globalState.currentRestaurant);
      
      }catch(err){
        console.log("There was an error setting the state")
      }
    } else {
      console.log("Loading the restaurant");
    }
  }

  }
  

  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">What are you in the mood for?
          <input
            className={`form-control inputPlace`}
            // Here we are handling the form with react state. The user is seing the state not what "they" are typing.
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
            placeholder="Burgers, Pizza, Tacos etc..."
          />
        </p>
        <p className="control"> Where?
          <input
            className={`form-control inputLocation`}
            // Here we are handling the form with react state. The user is seing the state not what "they" are typing.
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="Please enter a city name"
          />
        </p>
        <div
          className={`submitBtn`}
          //Handling the click with the submit function avobe.
          onClick={submit, setRestaurant()}
        ></div>
        <p className="control">
          <button className={`button is-static`}>Search</button>
        </p>
      </div>
    </form>
  );
}
