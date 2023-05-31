import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking',
        name: null,
        email: null,
        password: null,
        isMember: null,
        errorMessage: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.name = payload.name;
            state.email = payload.email;
            state.isMember = payload.isMember;
            state.errorMessage =  null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.name = null;
            state.email = null;
            state.isMember = null;
            state.errorMessage = payload;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    },
});

export const { } = authSlice.actions;