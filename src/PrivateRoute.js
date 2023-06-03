import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "./utils/hook";

const PrivateRoute = () => {
    const auth = useAuth();
    console.log('auth', auth);

    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute;
