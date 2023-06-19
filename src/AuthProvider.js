import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);

    useEffect(() => {
        setIsAuthenticated(sessionStorage.getItem('token') !== null);
        setRole(sessionStorage.getItem('role'));
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(sessionStorage.getItem('token') !== null);
            setRole(sessionStorage.getItem('role'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, role }}>
            {children}
        </AuthContext.Provider>
    );
};
