import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'
import { registerUser, loginUser, addUserToLocalStorage } from './thunks';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: null
    },
    extraReducers: {
        [loginUser.pending]: (state, { payload }) => {
            state.isLoading = true;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            addUserToLocalStorage(payload);
            toast.success(`Welcome Back ${payload.name}`);
        },
        [registerUser.pending]: (state, { payload }) => {
            state.isLoading = true;
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            addUserToLocalStorage(payload);
            toast.success(`Hello there ${payload.name}`);
        },
    }
});

export const { login, logout, register, loading } = userSlice.actions;