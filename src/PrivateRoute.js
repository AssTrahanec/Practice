import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth(); // Access the authentication status from your AuthContext

    // If authorized, return the child components
    // If not, navigate to the login page
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
