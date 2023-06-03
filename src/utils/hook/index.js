import {useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = () => {
    return useDispatch();
};

export const useAppSelector = (selector) => {
    return useSelector(selector);
};

export const useAuth = () => {
    console.log(sessionStorage.getItem('token'))
    console.log("hui", sessionStorage.getItem('token') !== null)
    return sessionStorage.getItem('token') !== null;
};


