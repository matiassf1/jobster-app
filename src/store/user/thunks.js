import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { logout } from "./userSlice";
import { clearAllJobsState, clearValuesSearch } from "../jobs/allJobsSlice";
import { clearValues } from "../jobs/jobSlice";

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
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
        try {
            const { data } = await customFetch.patch('/auth/updateUser', user, {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                },
            });
            return data.user;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue('Unauthorized! Loggin Out...');
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const clearStore = createAsyncThunk(
    'user/clearStore',
    async (message, thunkAPI) => {
        try {
            //logout user
            thunkAPI.dispatch(logout(message));
            //clear jobs value
            thunkAPI.dispatch(clearAllJobsState());
            //clear jobs inputs
            thunkAPI.dispatch(clearValues());
            thunkAPI.dispatch(clearValuesSearch());

            return Promise.resolve();
        } catch (error) {
            return Promise.reject();
        }
    }
)