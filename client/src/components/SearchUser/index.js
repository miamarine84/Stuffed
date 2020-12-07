import React,{useState} from 'react';
import API from '../../utils/API'
function SearchUser(){
    const [username,setUserName]=useState('');

   

    const search =async()=>{
        //Here i am hitting the search route for the user, but the data is null
        API.searchUser(username).then(res=>{    
        console.log("it worked: ", res)
        }).catch(err=>console.log(err));
    }

    return(
        <div class = "search">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input username={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Who are we munching with?"/>
            <button onClick={search}>Submit</button>
        </form>
        </div>
    )
}
export default SearchUser;