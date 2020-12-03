import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button 
    // It is getting the event from props
      onClick={props.onClick} 
      className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
    />
  );
}

export default CardBtn;
