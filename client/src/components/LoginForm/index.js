import React, { useEffect, useState,useContext } from "react";
//Here we are importing the image that does above the form
import FormImage from "../FormImage";
//These are buttons and forms from an npm package
import { Form, Button } from "react-bootstrap";
//This will be used for us to Redirect the user to their home page.
import { BrowserRouter as Redirect } from "react-router-dom";
//These are all of our functions that contain api request
import API from "../../utils/API";
import "./style.css";
import { AppContext } from "../../App";

//This component takes the submit function as one of its props
function LoginForm(props) {
  const globalState=useContext(AppContext)
  console.log(useEffect)
  //The states
  const [password, setPassword] = useState("");
  //Making sure that the state and the application is running with react
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      //Setting the value to the state
      globalState.setUserName(value);
      console.log(value);
    } else if (name === "password") {
      setPassword(value);
      console.log(value);
    }
  };
  //This function makes sure that the user is entering a valid username and password before allowing them to login
  const logIn = async () => {
    if (!globalState.username) {
      alert("Please enter your username address");
    } else if (!password) {
      alert("Please enter your account password");
    } else {
      try {
        //Making a request to the api to validate the user
        const response = await API.logIn(globalState.username, password);
        //When the user is validated we create a token for this user and this is how we will keep track of their account.
        props.onLogIn(response.data);
        console.log("success")
      } catch (error) {
        alert("Invalid credentials!");
      }
    }
  };

  
//Making sure the the default event does not happen in the form 

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      
      <FormImage className="formImage" />
      <h3>
        Login here:
      </h3>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicusername">
          <Form.Label>username address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="username"
            value={globalState.username}
            type="username"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={logIn} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
