import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, role, children, ...rest }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            const currentPath = location.pathname;
            console.log(currentPath);
            console.log(isAuthenticated, role);

            switch (role) {
                case 'student':
                    if (currentPath !== '/' && currentPath !== '/apply-practice-status') {
                        navigate('/');
                    }
                    break;

                case 'company':
                    if (currentPath !== '/form-page' && currentPath !== '/student-requests') {
                        navigate('/student-requests');
                    }
                    break;
                case 'university':
                    if (currentPath !== '/registration') {
                        navigate('/registration');
                    }
                    break;
                default:
                    navigate('/error');
            }
        }
    }, [isAuthenticated, role, navigate, location.pathname]);

    return children;
};

export default PrivateRoute;
