import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { API_ADDRESS } from "../../ApiConfig";

export const loginUser = createAsyncThunk(
    'auth/sign-in',
    async (values, { rejectWithValue }) => {
        try {

            const response = await axios.post(API_ADDRESS + '/auth/sign-in', values);
            if (
                response.data.status === 400 ||
                response.data.status === 401 ||
                response.data.status === 500
            ) {
                return;
            }
            console.log("values",response)
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('role', response.data.role);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);