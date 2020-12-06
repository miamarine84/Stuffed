import React,{useState,createContext} from "react";
import { StoreProvider } from "./utils/GlobalState";
import RootContainer from './RootContainer';


export const AppContext = createContext();

function App() {
  const [likedId,setLike]=useState(false);
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
    <AppContext.Provider value={{currentRestaurant,setCurrent,address,setAddress,rating,setRating,price,setPrice,phone,setPhone,name,setName,reviewCount,setReview,image,setImage,match,setMatch,matchCount,setCount,businessesResult, setBusinesses, url, setUrl, restaurantCounter, setRestaurantCounter,likedId,setLike}}>
      <StoreProvider>
      <RootContainer />
    </StoreProvider>
    </AppContext.Provider>
    
  );
}

export default App;
