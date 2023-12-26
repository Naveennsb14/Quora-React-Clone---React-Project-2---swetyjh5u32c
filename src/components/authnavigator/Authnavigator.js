import React from "react";
import { useAuth } from "../../pages/authprovider/Authprovider";
import { useLocation, Navigate } from "react-router-dom";

const Authnavigator = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation;
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ prevPath: pathname }} />
  );
};

export default Authnavigator;
