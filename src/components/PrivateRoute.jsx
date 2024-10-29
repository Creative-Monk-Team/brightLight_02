import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element: Element }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation(); 
  
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    if (isAuthenticated || isLoggedIn) {
      return <Element />;
    } else {
      return <Navigate to="/auth/panel/dash/bright" state={{ from: location }} replace />;
    }
  };

export default PrivateRoute;
