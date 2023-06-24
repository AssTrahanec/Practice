import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ApplyPracticeStatusPage from './pages/ApplyPracticeStatusPage';
import CompanyFormPage from './pages/CompanyFormPage';
import StudentListPage from './pages/StudentListPage';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './PrivateRoute';
import {useAuth} from "./utils/hook";
import StudentSummary from "./components/ResumeForm";
import ResumeForm from "./components/ResumeForm";
import ResumePage from "./pages/ResumePage";
import RegistrationPage from "./pages/RegistrationPage";

const AppRouter = () => {
    const { isAuthenticated, role } = useAuth();

    return (
        <Routes>
            <Route path="/summary" element={<ResumePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} role={role}><HomePage /></PrivateRoute>} />
            <Route path="/registration" element={<PrivateRoute isAuthenticated={isAuthenticated} role={role}><RegistrationPage /></PrivateRoute>} />
            <Route path="/apply-practice-status" element={<PrivateRoute isAuthenticated={isAuthenticated} role={role}><ApplyPracticeStatusPage /></PrivateRoute>} />
            <Route path="/form-page" element={<PrivateRoute isAuthenticated={isAuthenticated} role={role}><CompanyFormPage /></PrivateRoute>} />
            <Route path="/student-requests" element={<PrivateRoute isAuthenticated={isAuthenticated} role={role}><StudentListPage /></PrivateRoute>} />
        </Routes>
    );
};

export default AppRouter;
