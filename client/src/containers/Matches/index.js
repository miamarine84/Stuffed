import React, { useContext } from 'react';
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import {AppContext} from '../../App'
import MatchList from '../../components/Matches'
import "./style.css";
import { displayName } from 'react-tinder-card';

const Matches = () => {
    //get results from "dashboard"
    const globalState = useContext(AppContext);
   
   console.log(globalState.bothLike)

return(
    <div class="background">

< Navbar />
<br />
<h1 className="text-center" value={globalState.userName}>Hey {globalState.userName}! <br /></h1>
<p className="text-center likeorswipe">
        Here is your list of matches:
        </p>

    <MatchList />
    <br /><br /><br />
      </div>
  )
}

export default Matches;
