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
export const getCompanyOfCurrentUser = createAsyncThunk(
    'companies/id',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get(`/api/companies/${sessionStorage.getItem('userid')}`);
            return response.data;
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
export const getPracticeOfCurrentUser = createAsyncThunk(
    'practices/getPracticeOfCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/api/practices/');
            return response.data.data[0];
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getPublicPractices = createAsyncThunk(
    'practices/getAllPublic',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/api/practices/allpublic');
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

export const getStudent = createAsyncThunk(
    'students/id',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get(`/api/students/${sessionStorage.getItem('userid')}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const updateStudent = createAsyncThunk(
    'students/update',
    async ({ studentData, id }, { rejectWithValue }) => {
        try {
            await instanceAuth.put(`/api/students/${id}`, studentData);
            return studentData;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateResume = createAsyncThunk(
    'requests/update',
    async ({request, id},{ rejectWithValue }) => {
        try {
            await instanceAuth.put(`/api/requests/${id}`, request);
            return {...request, id};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updatePractice = createAsyncThunk(
    'practices/update',
    async ({practice, id},{ rejectWithValue }) => {
        try {
            await instanceAuth.put(`/api/practices/${id}`, practice);
            return {...practice, id};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const updateCompany = createAsyncThunk(
    'companies/update',
    async ({company, id},{ rejectWithValue }) => {
        try {
            await instanceAuth.put(`/api/companies/${id}`, company);
            return {...company, id};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createResume = createAsyncThunk(
    'requests/create',
    async (request,{ rejectWithValue }) => {
        try {
            const input = {...request, company_id: 0,student_id: parseInt(sessionStorage.getItem("userid"))}
            const response = await instanceAuth.post(`/api/requests/`, input);
            return request;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getResume = createAsyncThunk(
    'resume/get',
    async (request,{ rejectWithValue }) => {
        try {
            const studentResponse = await instanceAuth.get(`/api/students/${sessionStorage.getItem('userid')}`);
            const student = studentResponse.data
            const requestResponse = await instanceAuth.get('/api/requests');
            const requests = requestResponse.data.data
            const savedRequest = requests.find(request => request.student_id === student.student_id && request.status === 'saved');
            return savedRequest;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);




