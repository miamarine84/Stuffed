import React,{useState,createContext} from "react";
import { StoreProvider } from "./utils/GlobalState";
import RootContainer from './RootContainer';


export const AppContext = createContext();

function App() {
  const [imageSrc,setImageSrc]=useState('https://user-images.githubusercontent.com/65417908/101260693-799fac80-36ff-11eb-90ff-aa1a486a61fa.png');
  const [bothLike, setBothLike] = useState([]);
  const [usersFriend,setUsersFriend]=useState('');
  const [likedId, setLikedId] = useState("");
  const [userName, setUserName] = useState("");
  const [restId, setRestId]=useState('');
  const [businessesResult, setBusinesses]=useState([0]);
  const [currentRestaurant,setCurrent]=useState('')
  const [reviewCount,setReview]=useState('');
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [price,setPrice]=useState('');
  const [rating,setRating]=useState(0);
  const [address,setAddress]=useState('');
  const [image,setImage]=useState('');
  const [match,setMatch]=useState(false);
  const [matchCount,setCount]=useState(0);
  const [url, setUrl] = useState('');
  const [restaurantCounter, setRestaurantCounter] = useState(0);
  return (
    <AppContext.Provider value={{bothLike, setBothLike, usersFriend, setUsersFriend, likedId, setLikedId, userName, setUserName,restId, setRestId,currentRestaurant,setCurrent,address,setAddress,rating,setRating,price,setPrice,phone,setPhone,name,setName,reviewCount,setReview,image,setImage,match,setMatch,matchCount,setCount,businessesResult, setBusinesses, url, setUrl, restaurantCounter, setRestaurantCounter}}>
      <StoreProvider>
      <RootContainer />
    </StoreProvider>
    </AppContext.Provider>
    
  );
}

export default App;
