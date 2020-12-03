import React from "react";
//This is the component that is used to alert if there was a match
function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {/* It is getting the text from withing the component tags */}
      {props.children}
    </div>
  );
}

export default Alert;
