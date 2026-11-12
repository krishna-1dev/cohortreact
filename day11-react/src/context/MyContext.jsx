import { createContext } from "react";

export const MyStore = createContext();

export const ContextProvider = ({children}) => {
  console.log("context rendering");
  return <MyStore.Provider>{children}</MyStore.Provider>
};