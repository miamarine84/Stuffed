import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import {useBusinessSearch} from '../../hooks/useBusinessSearch';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    const [finalTerm,setFinalTerm]=useState('');
    const [finalLocation,setFinalLocation]=useState('');

    function submit(e) {
        e.preventDefault();
        setFinalTerm(term);
        setFinalLocation(location)
console.log(term, location)
       setSearchParams(finalTerm,finalLocation)   
    }
    const [businesses, amountResults, searchParams, setSearchParams]=useBusinessSearch(finalTerm,finalLocation);

   
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">What are you in the mood for?
                    <input className={`form-control input ${sizeClass} ${styles['input-control']}`}
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="Ex. Burgers, Pasta, Burritos etc..."
                    />
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}></div>
                </div>
                <p className="control">Where?
                    <input className={`form-control input ${sizeClass} ${styles['input-control']}`}
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           value={location}
                           placeholder="Please Enter a City Name"/>
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    {/* <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span> */}
                    <p className="control">
                    <button className={`button is-static ${sizeClass}`}> <span className={`fas fa-search`}></span> SEARCH</button>
                </p>
                </div>
               
            </div>
        </form>
    );
}