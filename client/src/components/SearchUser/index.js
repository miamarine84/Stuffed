import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import Dashboard from "../../containers/Dashboard";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./style.css";

function SearchUser() {
  const globalState = useContext(AppContext);
  const [usersFriend, setUsersFriend] = useState("");
  const [listLikes, setListLikes] = useState({});
  // Created usersFriend to save the friend we are searching for in to a new variable
  const search = async () => {
    // creating variables for user thats logged on, user we are looking for, and arrays of both of those users
    let currentUser = globalState.userName;
    let friendSearchName = usersFriend;
    let currentUsersLikes = [];
    let userFriendLikes = [];

    API.searchUser(currentUser)
      .then((res) => {
        currentUsersLikes.push(res.data[0].likedRestaurants);
        // pushing the liked restaurants in to those arrays for the current user
      })
      .catch((err) => console.log(err));

    API.searchUser(friendSearchName)
      .then((res) => {
        userFriendLikes.push(res.data[0].likedRestaurants);
        // pushing the liked restaurants in to those arrays for the user we are looking for
        console.log(userFriendLikes[0][1]);
        similarLikes();
      })
      .catch((err) => console.log(err));

    // First attempt to try to compare both the users likes but its obvioulsy true in the if statement so it returns empty array for similarLikes need to make it get called after both calls on API push all the likedRestaurants in to both arrays. Now GF bugging so cant get that done within time. But will get done soon. Also check as there is an unhandledPromise in the terminal but its working fine.

    //Woke up before work and got both arrays for both users likes showing up fine just need comparison filter is the way to go it seems go here if anything https://stackoverflow.com/questions/30389599/comparing-and-filtering-two-arrays

    let bothLike = [];
    function similarLikes() {
      if (userFriendLikes && currentUsersLikes) {
        bothLike = currentUsersLikes[0].filter((value) =>
          userFriendLikes[0].includes(value)
        );
      }
      setListLikes({bothLike})
      
      console.log("these are both likes",listLikes);
    }
  };
  

  if (!globalState.userName) {
    return <div></div>;
  } else {
    return (
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-bar form-control"
            username={usersFriend}
            onChange={(e) => setUsersFriend(e.target.value)}
            placeholder="Please Enter a Username"
          />
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
    );
  }
}
export default SearchUser;
