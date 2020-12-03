import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
//This is the card component.
function Card(props) {
  return (
    <div
      className="card"
      // it gets the value of the image from the props of this element
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {/* If there is no "props.image" we display the spinner. */}
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
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
