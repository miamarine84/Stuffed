import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import CardBtn from "../CardBtn";
import "./style.css";
//This is the card component.
function Card(props) {

  const globalState = useContext(AppContext);
  

  return (

    <div
      className="card"
      // it gets the value of the image from the props of this element
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}

      
    >
      {/* If there is no "props.image" we display the spinner. */}
      {!props.image && <div><i className="fa fa-spinner fa-spin" aria-hidden="true" /><p className="text">Fill out the form above to start swiping!</p></div>}
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
