import { createContext } from "react";
//setup our blank store --
export const MyStore = createContext();
//make a provider of our store who handles the data and customers
export const ContextProvider = ({children}) => {
  const [centralValue, setCentralValue] = useState('i am from context')
  return <MyStore.Provider>{children}</MyStore.Provider>
};


