import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const isAuthenticated = false;
  const loading = false;
  const location = useLocation();

  if(loading) {
    //I can add loading spinner here If I want
    return <div>Loading...</div>
  }

  if(!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute