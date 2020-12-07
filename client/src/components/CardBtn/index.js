import React from "react";
import "./style.css";

function CardBtn(props) {
  console.log(props)

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    
  }
  return (
    <button
    // It is getting the event from props
    onClick={props.onClick } 
      className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
     
    ></button>
     
    
    
    
    
    /*<div className='buttons'>
        <button onClick={() => onSwipe('left')}>Swipe left!</button>
        <button onClick={() => onSwipe('right')}>Swipe right!</button>
      </div>*/
  );
}

export default CardBtn;
