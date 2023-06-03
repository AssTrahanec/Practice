// import React, { createContext, useState, useContext } from 'react';
// import axios from 'axios';
// import { API_ADDRESS } from "./ApiConfig";
// import {useHistory} from "react-router-dom";
// // Создаем контекст аутентификации
// export const AuthContext = createContext();
//
// // Создаем компонент-провайдер для контекста аутентификации
// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(null);
//     const [error, setError] = useState(null);
//
//     // Функция для выполнения входа
//     const login = async (credentials) => {
//         try {
//             const response = await axios.post(API_ADDRESS + '/auth/sign-in', credentials);
//             if (response.status === 200) {
//                 const { token } = response.data;
//                 setToken(token);
//
//             } else {
//                 setError(response.data.message);
//             }
//         } catch (error) {
//             setError('Ошибка при выполнении запроса');
//         }
//     };
//
//     // Функция для выхода из системы
//     const logout = () => {
//         setToken(null);
//     };
//
//     // Возвращаем провайдер контекста, оборачивая дочерние компоненты
//     return (
//         <AuthContext.Provider
//             value={{
//                 token,
//                 error,
//                 login,
//                 logout,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// // Хук для использования контекста аутентификации в компонентах
// export const useAuth = () => useContext(AuthContext);
