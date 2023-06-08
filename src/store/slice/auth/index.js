import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../thunks/auth';

const initialState = {
    user: {},
    isLoggedIn: false,
    isLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            sessionStorage.clear()
            state.user = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                console.log(state.user)
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
