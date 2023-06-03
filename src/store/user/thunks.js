import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ name, email, password }, thunkAPI) => {
        try {
            const { data } = await customFetch.post('/auth/register', { name, email, password });
            return data.user;
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
            return data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)