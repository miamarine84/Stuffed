import React from "react";
import "./style.css";
//This is the component that is used to alert if there was a match
function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "48%", margin: "0 auto", marginTop: 1, ...props.style }}
    >
      {/* It is getting the text from withing the component tags */}
      {props.children}
    </div>
  );
}

export default Alert;
