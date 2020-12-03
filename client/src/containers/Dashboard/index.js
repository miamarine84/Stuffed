import React, { Component,useState,useEffect } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import Navbar from "../../components/Navbar";
import "./style.css";


class Dashboard extends Component {
  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }
  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };
    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;
      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };
  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
      < Navbar />
      <br />
       <h1 className="text-center">In the mood of!</h1>
        <h3 className="text-center">
          Swipe right to choose the restaurant you'd like to go!
        </h3>
        <Card  handleBtnClick={this.handleBtnClick} />
        <br />
        <h3 className="text-center">
          Swipe left unlike this restaurant!
        </h3>
        <h1 className="text-center">
          Choose restaurants so far!
        </h1>
        <Alert  type="success">
          Yay! Your partner likes this restaurant too!!!
        </Alert>
      </div>
    );
  }
}


export default Dashboard;