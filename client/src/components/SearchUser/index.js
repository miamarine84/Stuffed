import React,{useState} from 'react';
import API from '../../utils/API'
function SearchUser(){
    const [email,setEmail]=useState('');
    console.log(email);

    const search =()=>{
        API.searchUser(email).then(res=>{
            console.log("it worked: ", res)
        }).catch(err=>console.log(err));
    }

    return(
        <div class = "search">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder="Who are we munching with?"/>
            <button onClick={search}>Submit</button>
        </form>
        </div>
    )
}
export default SearchUser;