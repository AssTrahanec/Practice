import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ApplyPracticeStatusPage from './pages/ApplyPracticeStatusPage';
import CompanyFormPage from './pages/CompanyFormPage';
import StudentListPage from "./pages/StudentListPage";
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/StudentRequests" element= {<StudentListPage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/apply-practice-status" element={<ApplyPracticeStatusPage />} />
                <Route path="/form-page" element={<CompanyFormPage />} />
                <Route path="/" element={<LoginPage />} />
                {/*<Route path="/home" element={<PrivateRoute element={<HomePage />} />} />*/}
                {/*<Route*/}
                {/*    path="/apply-practice-status"*/}
                {/*    element={<PrivateRoute element={<ApplyPracticeStatusPage />} />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/form-page"*/}
                {/*    element={<PrivateRoute element={<CompanyFormPage />} />}*/}
                {/*/>*/}
                {/* Add other routes for other pages */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
