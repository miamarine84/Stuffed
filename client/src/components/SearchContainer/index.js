import React from 'react';
import styles from './style.css';
import { SearchBar } from '../SearchBar';
import useReactRouter from 'use-react-router';

 function LandingPage() {
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
      </div>
    </div>
  );
}
export default LandingPage;