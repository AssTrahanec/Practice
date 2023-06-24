import {
    createRequest, createResume,
    getCompanies, getCompanyOfCurrentUser, getPracticeOfCurrentUser,
    getPractices, getPublicPractices,
    getRequests, getResume,
    getStudent, signUp, updateCompany, updatePractice,
    updateRequest, updateResume,
    updateStudent
} from "../../thunks/assests";
import {createAction, createSlice} from "@reduxjs/toolkit";
const initialState = {
    companies: [],
    practices: [],
    requests: [],
    student: null,
    resume : null,
    companyPracticeInfo : null,
    companyInfo : null,
    isLoading: false,
    publicPractices : [],
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: { resetState(state) {
            Object.assign(state, initialState);
        },
    },
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
                state.publicPractices = action.payload;
            })
            .addCase(getRequests.fulfilled, (state, action) => {
                state.requests = action.payload;
                state.isLoading = false;
            })
            .addCase(getRequests.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getStudent.fulfilled, (state, action) => {
                state.student = action.payload;
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.student = action.payload;
            })
            .addCase(updateResume.fulfilled, (state, action) => {
                state.resume = action.payload
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
                state.companyInfo = action.payload
            })
            .addCase(updatePractice.fulfilled, (state, action) => {
                state.practiceInfo = action.payload
            })
            .addCase(createResume.fulfilled, (state, action) => {
                state.resume = action.payload
            })
            .addCase(getResume.fulfilled, (state, action) => {
                state.resume = action.payload
            })
            .addCase(signUp.fulfilled, (state, action) => {
                console.log(action.payload)
            });
    },
});
export const { resetState } = assetsSlice.actions;
export default assetsSlice.reducer;