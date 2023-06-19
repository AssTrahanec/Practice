import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAuth} from "../../utils/axios";
export const loginUser = createAsyncThunk(
    'auth/sign-in',
    async (values, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.post('/auth/sign-in', values);
            if (response.status === 200) {
                const { token, role, userid } = response.data;
                if (token && role) {
                    console.log(userid)
                    sessionStorage.setItem('userid', userid)
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('role', role);
                    return response.data;
                } else {
                    return rejectWithValue('Неверный формат данных');
                }
            } else {
                return rejectWithValue('Ошибка авторизации');
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
