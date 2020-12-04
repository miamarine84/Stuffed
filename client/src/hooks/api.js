//Here we are importing the url of the Api as well as our validation token.
import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    //Here we are parsing the url
    const query = queryString.stringify(queryParams);
    //And this is the assembled route for the Api
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        //These are the parameters that have to passed to the Api for validation.
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
            params:{
                _limit:1
            }
        }
    });
}