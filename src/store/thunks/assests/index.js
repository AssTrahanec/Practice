import { createAsyncThunk } from '@reduxjs/toolkit';
import {instanceAuth} from "../../../utils/axios";

export const getCompanies = createAsyncThunk(
    'companies/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/api/companies');
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getPractices = createAsyncThunk(
    'practices/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/api/practices/all');
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getRequests = createAsyncThunk(
    'requests/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/api/requests');
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


