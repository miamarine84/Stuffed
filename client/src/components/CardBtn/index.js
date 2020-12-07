import React,{useContext} from "react";
import "./style.css";
import App, { AppContext } from "../../App";
function CardBtn(props) {
  const globalState=useContext(AppContext);
  console.log(props)

  return (
    <button
    // It is getting the event from props
      name="button"
      value={globalState.restId}
      onClick={props.onClick} 
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
