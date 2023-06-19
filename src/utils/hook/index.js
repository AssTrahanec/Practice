import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => {
    return useDispatch();
};

export const useAppSelector = (selector) => {
    return useSelector(selector);
};

export const useAuth = () => {
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.user?.role);

    return {
        isAuthenticated,
        role,
    };
};
