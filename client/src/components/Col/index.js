import React from "react";
//This is handling the layout of the columns inside of the homePage , and also making sure that the text does not overflow from where it should be.
function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;
