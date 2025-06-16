import {createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const [user, setUser] = useState(true);
  const [isOperator, setIsOperator] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([])
  const [billAmt, setBillAmt] = useState(0)
  const navigate = useNavigate();


  const values = {user, setUser, isOperator, setIsOperator, navigate, selectedSeats, setSelectedSeats, billAmt, setBillAmt};

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}