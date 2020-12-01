import React, { useEffect, useState } from "react";
import FormImage from "../FormImage";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const signUp = () => {
    console.log(email,password)
        API.signUp(email, password).then(response=>{
          console.log("success");
        }).catch(err=>{
          console.log(err)
        })
        
      
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
        <Button onClick={signUp} variant="primary" type="submit">
          Sign
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
