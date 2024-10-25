import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const PrivateRoute = ({ element: Element }) => {
    const { isAuthenticated } = useAuth(); // Get the authentication state
    const location = useLocation(); // Get the current location
  
    // Check local storage for authentication state as well
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    if (isAuthenticated || isLoggedIn) {
      return <Element />;
    } else {
      return <Navigate to="/auth/dashboard/login/admin" state={{ from: location }} replace />;
    }
  };

export default PrivateRoute;
