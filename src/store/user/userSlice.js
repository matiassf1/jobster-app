import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'
import { registerUser, loginUser, updateUser, clearStore } from './thunks';
import { removeUserFromLocalStorage, getUserFromLocalStorage, addUserToLocalStorage } from '../../utils/localStorage';
import { clearValues } from '../jobs/jobSlice';
import { clearValuesSearch } from '../jobs/allJobsSlice';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: getUserFromLocalStorage()
    },
    reducers: {
        logout: (state, { payload }) => {
            state.user = null;
            removeUserFromLocalStorage();
            payload && toast.success(payload);
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
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
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            addUserToLocalStorage(payload);
            toast.success(`${payload.name} your profile have been updated`);
        },
        [clearStore.rejected]: () => {
            toast.error('There was an error');
        }
    }
});

export const { logout } = userSlice.actions;