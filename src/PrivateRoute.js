import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from "./utils/hook";

const PrivateRoute = () => {
    const userRole = useAppSelector(state => state.auth.user?.role);
    console.log(userRole)
    // Определите массивы допустимых путей для каждой роли
    const studentAllowedPaths = ['/', 'apply-practice-status'];
    const companyAllowedPaths = ['form-page', 'student-requests'];

    // Проверьте, имеет ли текущая роль доступ к текущему пути
    const isAllowedPath = (allowedPaths) => allowedPaths.includes(window.location.pathname);

    // Перенаправьте пользователя, если у него нет доступа к текущему пути
    const checkAccess = () => {
        if (userRole === 'student' && !isAllowedPath(studentAllowedPaths)) {
            return <Navigate to="/" />;
        }
        if (userRole === 'company' && !isAllowedPath(companyAllowedPaths)) {
            return <Navigate to="/student-requests" />;
        }
        return <Outlet />;
    };

    return (
        userRole ? checkAccess() : <Navigate to="/login" />
    );
};

export default PrivateRoute;
