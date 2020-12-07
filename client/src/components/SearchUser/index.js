import React,{useState} from 'react';
import API from '../../utils/API'
import Dashboard from '../../containers/Dashboard'
import { Link } from "react-router-dom";
import "./style.css";
function SearchUser(){
    const [username,setUserName]=useState('');

   

    const search =async()=>{
        //Here i am hitting the search route for the user, but the data is null
        API.searchUser(username).then(res=>{   
        console.log("it worked: ", res)
        }).catch(err=>console.log(err));
    }

    return(
        <div className = "search">
           
        <form onSubmit={(e)=>e.preventDefault()}>
            
            <input className="search-bar form-control" username={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Please Enter a Username"/>
            <Link
              to="/dashboard"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/dashboard"
              }
            >
                <button className="submit-btn"onClick={search}>
                    Submit
                </button>
            </Link>
        </form>
        </div>
    )
}
export default SearchUser;