import React from 'react';
import { SearchResult } from './SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../Spinner';

 function SearchResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
        console.log(searchResults);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}
export default SearchResults;