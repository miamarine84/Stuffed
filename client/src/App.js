import React,{useState,createContext} from "react";
import { StoreProvider } from "./utils/GlobalState";
import RootContainer from './RootContainer';


export const AppContext = createContext();

function App() {
  const [image,setImage]=useState('');
  const [match,setMatch]=useState(false);
  const [matchCount,setCount]=useState(0);

  return (
    <AppContext.Provider value={{image,setImage,match,setMatch,matchCount,setCount}}>
      <StoreProvider>
      <RootContainer />
    </StoreProvider>
    </AppContext.Provider>
    
  );
}

export default App;
