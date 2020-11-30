import React, { useState } from "react";

import NavBar from "../Navbar";
import { SearchResultsSummary } from "./SearchResultsSummary";
import SearchResults from "../Search/SearchResults";
import useReactRouter from "use-react-router";
import useBusinessSearch from "../../hooks/useBusinessSearch";

function Search() {
  const [businesses, setBussinesses] = useState("");
  const [amountResults, setAmountResults] = useState(0);
  const [searchParams, setSearchParams] = useState([]);
  const [term, setTerm] = useState("");
  const [locationParam, setLocationParam] = useState("");
  const [search, setSearch] = useState("");
  function useLocation() {

    const { location, history } = useReactRouter();
    const params = new URLSearchParams(location.search);

    const term = params.get("find_desc");
    const locationParam = params.get("find_loc");

    const [
      businesses,
      amountResults,
      searchParams,
      performSearch,
    ] = useBusinessSearch(term, locationParam);

    setBussinesses(businesses);
    setSearchParams(searchParams);
    setAmountResults(amountResults);
    setLocationParam(locationParam);
    setTerm(term);

    if (!term || !locationParam) {
      history.push("/");
    }

    const search= async(term, location)=> {
      const encodedTerm =await encodeURI(term);
      const encodedLocation =await encodeURI(location);
      history.push(
        `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
      );
      performSearch({ term, location });
    }
    setSearch(search)

  }

  return (
    <div>
      <NavBar term={term} location={locationParam} search={search} />

      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        shownResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
}
export default Search;
