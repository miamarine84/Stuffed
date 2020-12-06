import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import CardBtn from "../CardBtn";
import "./style.css";
//This is the card component.
function Card(props) {

  const globalState = useContext(AppContext);
  console.log(globalState.restaurantCounter)
  

  return (

    <div
      className="card"
      // it gets the value of the image from the props of this element
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}

      
    >
      {/* If there is no "props.image" we display the spinner. */}
      {!props.image && <div><img src={"https://user-images.githubusercontent.com/65417908/101260693-799fac80-36ff-11eb-90ff-aa1a486a61fa.png"}className="logo" aria-hidden="true"></img><p className="text">Fill out the form above to start swiping!</p></div>}
      {/* These are the buttons of the application. */}
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;
