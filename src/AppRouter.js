import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ApplyPracticeStatusPage from './ApplyPracticeStatusPage';
import CompanyFormPage from './CompanyFormPage';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/apply-practice-status" element={<ApplyPracticeStatusPage />} />
                <Route path="/form-page" element={<CompanyFormPage />} />
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
