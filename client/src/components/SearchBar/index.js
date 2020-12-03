//Here we are importing our state and react as well
import React, { useState } from "react";
//This is the stylesheet , maybe we should call it 'style.css'
import styles from "./SearchBar.module.css";
//Here we are importing our costum hook.
import { useBusinessSearch } from "../../hooks/useBusinessSearch";

export function SearchBar(props) {
  //These are our states.
  const [term, setTerm] = useState( "");
  const [location, setLocation] = useState("");
  const [finalTerm, setFinalTerm] = useState("");
  const [finalLocation, setFinalLocation] = useState("");
  //This is how we handle the form submit.
  function submit(e) {
    e.preventDefault();
    //Here we are using the callback function from our 'useBusinessSearch' and passing the term and location as the values.
    setSearchParams({term, location});
  }
  //These are the variable that we can work with.
  const [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
  ] = useBusinessSearch(finalTerm, finalLocation);
  //These should give us back all of these varaible in the console
  console.log("This is the amount of results:",amountResults, "Search Params: ",searchParams,"Businesses: ", businesses);
  
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`inputPlace`}
            // Here we are handling the form with react state. The user is seing the state not what "they" are typing.
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
            placeholder="burgers, barbers, spas, handymen"
          />
        </p>
        <p className="control">
          <input
            className={`inputLocation`}
            // Here we are handling the form with react state. The user is seing the state not what "they" are typing.
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="Where"
          />
        </p>
        <div
          className={`submitBtn`}
          //Handling the click with the submit function avobe.
          onClick={submit}
        >
        </div>
        <p className="control">
          <button className={`button is-static`}>Search</button>
        </p>
      </div>
    </form>
  );
}