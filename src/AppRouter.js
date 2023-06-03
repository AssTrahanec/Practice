import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ApplyPracticeStatusPage from './pages/ApplyPracticeStatusPage';
import CompanyFormPage from './pages/CompanyFormPage';
import StudentListPage from './pages/StudentListPage';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route index element={<HomePage />} />
                <Route path="apply-practice-status" element={<ApplyPracticeStatusPage />} />
                <Route path="form-page" element={<CompanyFormPage />} />
                <Route path="student-requests" element={<StudentListPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
