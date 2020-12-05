import React from "react";
import "./style.css";
//This is the image that is being used in the 'HomePage'
function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
