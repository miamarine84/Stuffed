import React, { useEffect, useState } from "react";
import FormImage from '../FormImage'
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Redirect } from "react-router-dom";
import API from '../../utils/API'
import "./style.css";

function LoginForm() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

   const handleInputChange=(event)=>{
        const {name,value}=event.target;
        if(name==='email'){
            setEmail(value);
        }else if(name==='password'){
            setPassword(value);
        }
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    API.logIn(email,password).then(res=>{
       console.log("success", res)
    })
  };
  return (
    <div>
      <FormImage className="formImage"/>
      <Form className="formContainer" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleInputChange} name="email" value={email}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else. 
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleInputChange} value={password} name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default LoginForm;
