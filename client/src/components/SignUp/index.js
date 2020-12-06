import React, { useEffect, useState } from "react";
import FormImage from "../FormImage";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function SignUp(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const signUp = () => {
    console.log(username, password)
    API.signUp(username, password).then(response => {
      console.log("success");
    }).catch(err => {
      console.log(err)
    })


  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <FormImage className="formImage" />
      <h3>
        Sign Up here:
      </h3>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="username"
            value={username}
            type="text"
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
        <Button onClick={signUp} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
