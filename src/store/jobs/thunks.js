import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { clearValues } from "./jobSlide";
import { logout } from "../user/userSlice";

export const createJob = createAsyncThunk(
    'job/createJob',
    async (job, thunkAPI) => {
        try {
            const { data } = await customFetch.post('/jobs', job, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
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

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs',
    async (_, thunkAPI) => {
        let url ='/jobs';

        try {
            console.log(thunkAPI.getState().user.user.token);
            const { data } = await customFetch.get(url, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue(`${error.response.data.msg}, Loggin Out...`);
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)