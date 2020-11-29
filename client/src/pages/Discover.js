import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Navbar from "../../src/components/Navbar";

import {useReactRouter} from 'use-react-router';

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
  };

  // When the component mountzs, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = (event) => {
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

  search = (term, location) => {
    const { history } = useReactRouter();
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  };
  loadNextDog = () => {
    API.getRandomDog()
      .then((res) =>
        this.setState({
          ...this.state,
          image: res.data.message,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center">Find a new restaurant</h1>
        <h3 className="text-center">
          Like or swipe right if its a possible choice
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          We have {this.state.matchCount} restaurant matches
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Found somthing to eat!!!
        </Alert>
      </div>
    );
  }
}

export default Discover;
