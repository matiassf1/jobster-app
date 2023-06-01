import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ name, email, password }, thunkAPI) => {
        try {
            const { data } = await customFetch.post('/auth/register', { name, email, password });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
    
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }, thunkAPI) => {
        try {
            const { data } = await customFetch.post('/auth/login', { email, password });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
}

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
}