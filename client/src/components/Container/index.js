import React from "react";
//This is the container that hold's the main information of the application. the value of the text is equals to its children.
function Container(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Container;
