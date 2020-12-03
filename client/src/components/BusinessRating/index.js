import React from 'react';
//Importing the styleSheet we should name it "style.css"
import styles from './BusinessRating.module.css';
//This is an npm package that works with bootstrap symbols as well as font awesome simbols.
import Rating from 'react-rating';
//The rating of the restaurant is cominf from the props of this component.
export function BusinessRating(props) {
    return (
        <div className={styles.rating}>
            {/* This is the Rating component from the npm package */}
            {/* The "fractions" attribute takes by how many halfs you want to be able to devide the stars by */}
            {/*"emptySymbol"and "fullSymbol" are for when these are full colored or empty*/}
            <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                readonly
                initialRating={props.rating}
            />
            {/* These are the numbers of reviews that the restaurant has and it gets it from this components prop. */}
            <p>{props.reviewCount} Reviews</p>
        </div>
    );
}