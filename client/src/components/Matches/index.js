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
"https://s3-media1.fl.yelpcdn.com/bphoto/rw3MYGTYt36JKegN9XBGCA/o.jpg"


const testData=[{
        img: "https://s3-media1.fl.yelpcdn.com/bphoto/rw3MYGTYt36JKegN9XBGCA/o.jpg",
        name: "Magic City Pizza",
        url:"https://www.yelp.com/biz/magic-city-pizza-miami?adjust_creative=91BOvSxAxbnG4kyhopWaLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=91BOvSxAxbnG4kyhopWaLw"
    },
    {
        img: "https://s3-media4.fl.yelpcdn.com/bphoto/MEOupGLBbGYyJF6y6opRzg/o.jpg",
        name:"Hate Mondays Tavern",
        url: "https://www.yelp.com/biz/hate-mondays-tavern-miami?adjust_creative=91BOvSxAxbnG4kyhopWaLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=91BOvSxAxbnG4kyhopWaLw"
    },
    {
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/UBtJfIMs1E-j3g0lE9ZHDg/o.jpg",
    name: "Tacos & Tattoos",
    url: "https://www.yelp.com/biz/tacos-and-tattoos-miami-2?adjust_creative=91BOvSxAxbnG4kyhopWaLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=91BOvSxAxbnG4kyhopWaLw"
    },
    {
        img: "https://s3-media1.fl.yelpcdn.com/bphoto/PkhjEsMKhPHOtH8gheq3lQ/o.jpg",
        name: "Ohana Sushi",
        url: "https://www.yelp.com/biz/ohana-sushi-doral?adjust_creative=91BOvSxAxbnG4kyhopWaLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=91BOvSxAxbnG4kyhopWaLw"
    },
    {
        img: "https://s3-media2.fl.yelpcdn.com/bphoto/8_dnUGiqVdX_ZcGj6ddikQ/o.jpg",
        name:"Vero",
        url: "https://www.yelp.com/biz/vero-miami-3?adjust_creative=91BOvSxAxbnG4kyhopWaLw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=91BOvSxAxbnG4kyhopWaLw"
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
                        <div class="card-body image-title">{testData.name}</div>
                        <div className="yelp-link"><a className="yelp-link" target="_blank" href={testData.url}>Click here to check out {testData.name} on Yelp! </a>
                            </div>
                            </div>
                        ))}
                        
                    
             </div>
                
            </div>
    

);
}

export default MatchList;