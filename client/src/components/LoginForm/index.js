import React, { useEffect, useState } from "react";
import FormImage from "../FormImage";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      console.log(value);
    } else if (name === "password") {
      setPassword(value);
      console.log(value);
    }
  };

  const logIn = async () => {
    if (!email) {
      alert("Please enter your email address");
    } else if (!password) {
      alert("Please enter your account password");
    } else {
      try {
        const response = await API.logIn(email, password);
        props.onLogIn(response.data);
        console.log("success")
      } catch (error) {
        alert("Invalid credentials!");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormImage className="formImage" />
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
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
