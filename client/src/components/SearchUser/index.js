import React,{useState} from 'react';

function SearchUser(){
    const [name,setName]=useState('');
    console.log(name);
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input onChange={(e)=>setName(e.target.value)} placeholder="Who are we munching with?"/>
        </form>
    )
}
export default SearchUser;