import React,{useState} from 'react';
import API from '../../utils/API';

const LoginForm=(props)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const logIn=async ()=>{
        if(!email) {
            alert("Please enter your email address");
        } else if(!password) {
            alert("Please enter your account password");
        } else {
            try {
                const response=await API.logIn(email,password);
                props.onLogIn(response.data);
            } catch(error) {
                alert("Invalid credentials!");
            }
        }
    }


    return <div>
        <label>Email Address:</label>
        <input type="email" value={email} onChange={e=>{
            setEmail(e.target.value);
        }} />
        <label>Password:</label>
        <input value={password} onChange={e=>{
            setPassword(e.target.value);
        }} type="password" />
        <button onClick={logIn}>Log in</button>
    </div>
}
export default LoginForm;