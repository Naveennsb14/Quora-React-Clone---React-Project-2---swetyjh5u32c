import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  let isUserLoggedin;
  let token = sessionStorage.getItem("token");
  if (token) {
    isUserLoggedin = true;
  } else {
    isUserLoggedin = false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedin); // context API for protected route
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}> 
      {children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
