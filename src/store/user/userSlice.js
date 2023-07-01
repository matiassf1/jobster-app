import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'
import { registerUser, loginUser, updateUser, clearStore } from './thunks';
import { removeUserFromLocalStorage, getUserFromLocalStorage, addUserToLocalStorage } from '../../utils/localStorage';

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
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload)
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload;
                addUserToLocalStorage(payload);
                toast.success(`Welcome Back ${payload.name}`);
            })
            .addCase(registerUser.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload;
                addUserToLocalStorage(payload);
                toast.success(`Hello there ${payload.name}`);
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload;
                addUserToLocalStorage(payload);
                toast.success(`${payload.name} your profile have been updated`);
            })
            .addCase(clearStore.rejected, () => {
                toast.error('There was an error');
            })
    }
});

export const { logout } = userSlice.actions;