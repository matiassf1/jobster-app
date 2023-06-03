import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'
import { registerUser, loginUser  } from './thunks';
import { removeUserFromLocalStorage, getUserFromLocalStorage, addUserToLocalStorage } from '../../utils/localStorage';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: getUserFromLocalStorage()
    },
    reducers: {
        logout: (state) => {
            console.log('hi');
            state.user = null;
            removeUserFromLocalStorage();
        }
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