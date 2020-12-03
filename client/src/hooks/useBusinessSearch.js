//Importing hooks from react;
import React,{useState, useEffect} from 'react';
//Importing all of the validation and the url from the api file.
import * as api from './api';
// This is a costum hook that takes term (the tipe of food or restaurant), and the location (the area they wish to search by).
export function useBusinessSearch(term, location) {
    //The starting value of this state is an empty array;
    const [businesses, setBusinesses] = useState([]);
    //These is the number of restaurants that we get from the api call.
    const [amountResults, setAmountResults] = useState();
    //And here we keep the type of food and the location where they are searching
    const [searchParams, setSearchParams] = useState({term, location});
    //This useEffect will only get triggered when the "searchParams" state is changed.
    useEffect(() => {
        //initial value of business
        setBusinesses([]);
        //Function that retrieves the data from the api in an asycrinous matter.
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                console.log(resp);
                //Setting the value of the states
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e) {
                //Here is how we handle the error,
                //Here we should create like a "Mistake", This should give a slight alert letting the user know there has been a mistake.
                console.error(e);
            }
        };
        //We are triggering our api call
        fetchData();
        //Listening to the search params state to be changed.
    }, [searchParams]);
    //These are the values that are going to be returned to the front.
    return [businesses, amountResults, searchParams, setSearchParams];
}
