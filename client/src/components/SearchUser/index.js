import React, { useState, useContext } from 'react';
import API from '../../utils/API'
import Dashboard from '../../containers/Dashboard'
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./style.css";

function SearchUser() {
    const globalState = useContext(AppContext);
     console.log(globalState.bothLike)
    // Created usersFriend to save the friend we are searching for in to a new variable
    const search = async () => {
        // creating variables for user thats logged on, user we are looking for, and arrays of both of those users
        let currentUser = globalState.userName;
        let friendSearchName = globalState.usersFriend;
        let currentUsersLikes = [];
        let userFriendLikes = [];

        API.searchUser(currentUser).then(res => {
            console.log(globalState.bothLike)
            currentUsersLikes.push(res.data[0].likedRestaurants);
            // pushing the liked restaurants in to those arrays for the current user
        }).catch(err => console.log(err));

        API.searchUser(friendSearchName).then(res => {

            userFriendLikes.push(res.data[0].likedRestaurants)
            // pushing the liked restaurants in to those arrays for the user we are looking for
            similarLikes()
        }).catch(err => console.log(err));
   
        function similarLikes() {
            console.log(currentUsersLikes)
            console.log(userFriendLikes)
            if (userFriendLikes && currentUsersLikes) {
                let likeSimilarArray = currentUsersLikes[0].filter(value => 
                userFriendLikes[0].includes(value))
                console.log(likeSimilarArray)
                globalState.setBothLike(likeSimilarArray)
            }
        }
    }

    if (!globalState.userName) {
        return (<div></div>)
    } else {

        return (

            <div className="search">

                <form onSubmit={(e) => e.preventDefault()}>

                    <input className="search-bar form-control" username={globalState.usersFriend} onChange={(e) => globalState.setUsersFriend(e.target.value)} placeholder="Enter a Username" />
                    <Link
                        to="/dashboard"
                        className={
                            window.location.pathname === "/" ||
                            window.location.pathname === "/dashboard"
                        }
                    >
                        <button className="submit-btn" onClick={search}>
                            Submit
                </button>
                    </Link>
                </form>
            </div>
        )
    }
}
export default SearchUser;