import {createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const [user, setUser] = useState(true);
  const [isOperator, setIsOperator] = useState(false);
  const navigate = useNavigate();

  const values = {user, setUser, isOperator, setIsOperator, navigate};

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}