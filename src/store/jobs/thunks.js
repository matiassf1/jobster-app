import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { clearValues } from "./jobSlide";
import { logout } from "../user/userSlice";

export const createJob = createAsyncThunk(
    'job/createJob',
    async (job, thunkAPI) => {
        console.log(thunkAPI.getState().user.user.token)
        try {
            const { data } = await customFetch.post('/jobs', job, {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            thunkAPI.dispatch(clearValues());
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue('Unauthorized! Loggin Out...');
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)