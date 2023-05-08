import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    const login = (token) => {
        setIsLoggedIn(true);
        setAuthToken(token);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setAuthToken(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

