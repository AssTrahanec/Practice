import {getCompanies, getPractices, getRequests} from "../../thunks/assests";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    companies: [],
    practices: [],
    requests: [],
    isLoading: false,
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
            })
            .addCase(getRequests.fulfilled, (state, action) => {
                state.requests = action.payload;
            })
        ;
    },
});

export default assetsSlice.reducer;