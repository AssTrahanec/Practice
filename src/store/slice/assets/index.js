import {
    createRequest, createResume,
    getCompanies, getCompanyOfCurrentUser, getPracticeOfCurrentUser,
    getPractices, getPublicPractices,
    getRequests, getResume,
    getStudent, updateCompany, updatePractice,
    updateRequest, updateResume,
    updateStudent
} from "../../thunks/assests";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    companies: [],
    practices: [],
    requests: [],
    student: null,
    resume : null,
    companyPracticeInfo : null,
    companyInfo : null,
    isLoading: false
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCompanies.fulfilled, (state, action) => {
                state.companies = action.payload;
                state.isLoading = false;
            })
            .addCase(getCompanies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPractices.fulfilled, (state, action) => {
                state.practices = action.payload;
                state.isLoading = false;
            })
            .addCase(getPractices.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPracticeOfCurrentUser.fulfilled, (state, action) => {
                state.companyPracticeInfo = action.payload;
            })
            .addCase(getCompanyOfCurrentUser.fulfilled, (state, action) => {
                state.companyInfo = action.payload;
            })
            .addCase(getPublicPractices.fulfilled, (state, action) => {
                state.practices = action.payload;
            })
            .addCase(getRequests.fulfilled, (state, action) => {
                state.requests = action.payload;
                state.isLoading = false;
            })
            .addCase(getRequests.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getStudent.fulfilled, (state, action) => {
                console.log(action.payload)
                state.student = action.payload;
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.student = action.payload;
            })
            .addCase(updateResume.fulfilled, (state, action) => {
                console.log(action.payload)
                state.resume = action.payload
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
                console.log(action.payload)
                state.companyInfo = action.payload
            })
            .addCase(updatePractice.fulfilled, (state, action) => {
                console.log(action.payload)
                state.practiceInfo = action.payload
            })
            .addCase(createResume.fulfilled, (state, action) => {
                state.resume = action.payload
            })
            .addCase(getResume.fulfilled, (state, action) => {
                state.resume = action.payload
            });
    },
});

export default assetsSlice.reducer;