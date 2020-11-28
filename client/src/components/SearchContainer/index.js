import React from 'react';
import styles from './style.css';
import { SearchBar } from '../SearchBar';
import { SearchSuggestions } from '../SearchContainer/SearchSuggestions';
import useReactRouter from 'use-react-router';

export function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <SearchBar search={search} />
        <SearchSuggestions />
      </div>
    </div>
  );
}
