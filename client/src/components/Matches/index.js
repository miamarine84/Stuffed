import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import API from "../../../src/utils/API";
import "./style.css";



function MatchList(props) {

    const globalState = useContext(AppContext);

    console.log(globalState.bothLike)

    let matchLiked = globalState.bothLike[0];
    console.log(matchLiked)
    API.matchLiked(matchLiked)
    .then((res) => {
      console.log("this is the like : ", res)
    })
    .catch((err) => {
      console.log("Error with the like", err);
    });
// LINE 15-27 IS TEST DATA FOR STYLING PURPOSES. Will be deleted once we get the actual data from the database
 
    const testData=[{
        img: "https://s3-media1.fl.yelpcdn.com/bphoto/qZhQDmRihSoVcQSOu3pRlA/o.jpg",
        name: "Pizza Restaurant"
    },
    {
        img: "https://s3-media3.fl.yelpcdn.com/bphoto/6J-ya3_qIS7wre0T3v9Sfg/o.jpg",
        name:"Burger Restaurant"
    },
    {
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/UBtJfIMs1E-j3g0lE9ZHDg/o.jpg",
    name: "Taco Restaurant"
    },
    {
        img: "https://s3-media1.fl.yelpcdn.com/bphoto/qZhQDmRihSoVcQSOu3pRlA/o.jpg",
        name: "Pizza Restaurant"
    },
    {
        img: "https://s3-media3.fl.yelpcdn.com/bphoto/6J-ya3_qIS7wre0T3v9Sfg/o.jpg",
        name:"Burger Restaurant"
    },
    {
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/UBtJfIMs1E-j3g0lE9ZHDg/o.jpg",
    name: "Taco Restaurant"
    },
    ]
    return (

<div class="container" >
            <div class="row">
                
 {/* The only thing here we will need to change is the test data call to the actual data call */}
                        {testData.map((testData,index)=>(
                            <div key={`id-${index}`} class="col-lg-4 mb-4 col-sm-12"><div class="picture-card"     
                            style={{
                                backgroundImage: testData.img ? `url(${testData.img})` : "none"
                              }}></div>
                        <div class="card-body image-title">{testData.name}</div></div>
                        ))}
                        
                    
             </div>
                
            </div>
    

);
}

export default MatchList;