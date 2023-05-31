import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading:false,
        user: null
    },
    reducers: {
        register: () => {

        },
        login: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
        },
        logout: () => {

        },
        loading: (state) => {
            state.isLoading = true;
        }
    },
});

export const { login, logout, register, loading } = userSlice.actions;